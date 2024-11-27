import { Request, Response } from "express";
import { hashPassword, comparePasswords } from "../services/password.service";
import prisma from "../models/user";
import { generateToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    if (!email) {
      res.status(400).json({ message: "You must type an email" });
      return;
    }
    if (!password) {
      res.status(400).json({ message: "You must type a password" });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error: any) {
    if (error?.code === "P2002" && error?.meta?.target?.includes("email")) {
      res.status(400).json({ message: "That email already exists" });
    }

    console.log(error);
    res.status(500).json({ error: "There was an error registering" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    if (!email) {
      res.status(400).json({ message: "You must type an email" });
      return;
    }
    if (!password) {
      res.status(400).json({ message: "You must type a password" });
      return;
    }

    const user = await prisma.findUnique({ where: { email } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ error: "User and password do not match" });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error: any) {
    console.log("Error: ", error);
  }
};

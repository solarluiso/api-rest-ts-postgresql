import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.use(express.json());

// routes

console.log("A ver, a ver...  Yessssss!");

export default app;

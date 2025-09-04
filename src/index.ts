import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.config.js';
import { connectDB } from "./lib/db.js";
import { router as urlRoutes } from "./routes/url.route.js";


dotenv.config()

const PORT = process.env.PORT;

const app = express()

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
  }),
  express.json(),
  cookieParser(),
);

// routes
app.use("/urls", urlRoutes)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (_req, res) => {
  res.json({
    message: "URL API is running!",
    documentation: "/swagger",
    repo_backend: "https://github.com/mateus-lopes/url-api",
    repo_frontend: "https://github.com/mateus-lopes/url-ui",
    author: "https://github.com/mateus-lopes",
  });
});

app.listen(PORT, () => {
  console.log(`\nhttp://localhost:${PORT}\n`);

  connectDB()
    .then(() => console.log("Database connected successfully"))
    .catch((error: any) => console.error("Database connection failed:", error));
});
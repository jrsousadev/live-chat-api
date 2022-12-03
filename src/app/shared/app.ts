import express, { NextFunction, Request, Response } from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

import "express-async-errors";

import { Server } from "socket.io";
import { AppError } from "./errors/AppError";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

export { app, serverHttp, io };

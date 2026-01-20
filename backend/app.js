import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors({
    origin: "*",
    caredentials: true,
}))

app.use(express.json())
app.use(cookieParser())


// Error Handling Middleware
app.use(errorMiddleware)
export {app}
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./routes/user.router.js";

const app = express();
const allowedOrigins = (process.env.CORS_ORIGIN?.split(",") ?? [
    "http://localhost:5000",
    "http://localhost:5173",
]).map((origin) => origin.trim());

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/users", router);

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        statusCode,
        success: false,
        message: err.message || "Internal server error",
        errors: err.error || [],
    });
});

export { app };
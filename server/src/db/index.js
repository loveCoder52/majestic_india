import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
        );

        console.log(`🍃 MongoDB Connected! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("❌ MongoDB Connection Error:", error);
        // Keep the process alive so the error is visible and the developer can fix env vars locally.
        // Rethrow so the caller can decide whether to start the app or not.
        throw error;
    }
};

export default ConnectDB;

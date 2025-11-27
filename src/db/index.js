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
        process.exit(1);
    }
};

export default ConnectDB;

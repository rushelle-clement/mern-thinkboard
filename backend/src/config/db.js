import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfulyy.")
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1); //exit with failure

    }

}
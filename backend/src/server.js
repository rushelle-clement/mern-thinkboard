import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimitter.js";
import cors from "cors"

const app = express()
//access env variables
dotenv.config();


//middleware - get access to req.body
app.use(cors(
    {
        origin: "http://localhost:5173"
    }
));
app.use(express.json());
app.use(rateLimiter);


//endpoint
app.use("/api/notes", notesRoutes)



const PORT = process.env.PORT || 5001

//connect db
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started")
    })
})




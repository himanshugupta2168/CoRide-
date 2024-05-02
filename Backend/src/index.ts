import express, {Errback} from "express";
import { config } from "dotenv";
import cors from "cors"
import authRoutes from "./routes/authRoute"
import rideRoutes from "./routes/rides"
const app = express();
config();
app.use(express.json());
app.use(cors({
    credentials:true, 
    origin:"*",
}));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/rides", rideRoutes)
app.listen(process.env.PORT || 3000).on("error", (e: Errback) => {
    console.log("Error in listening to port", e);
});
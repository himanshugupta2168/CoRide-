import express, {Errback, NextFunction} from "express";
import { config } from "dotenv";
import cors from "cors"
import {responseCodes}  from "./config/responseCodes";
import rideRoutes from "./routes/rideRoutes"
const app = express();
config();

app.listen(process.env.PORT || 3000).on("error", (e: Errback) => {
app.use(cors({
    origin:"*", 
    credentials:true, 
}))
app.use("/api/v1/rides",rideRoutes )

app.get("/", (req, res)=>{res.send("hello")})
app.use((err:Errback, req:Request, res:Response, next:NextFunction)=>{
    console.error(err);
    return res.status(responseCodes.internalServerError).json({
        success:false, 
        error: err
    })
})
app.listen(process.env.PORT || 8000).on("error", (e: Errback) => {
    console.log("Error in listening to port", e);
});
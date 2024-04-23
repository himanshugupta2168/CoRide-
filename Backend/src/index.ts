import express, { Request, Response, Errback } from "express";
import { config } from "dotenv";

const app = express();



app.listen(process.env.PORT || 8000).on("error", (e: Errback) => {
    console.log("Error in listening to port", e);
});

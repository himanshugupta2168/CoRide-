import express, {Errback} from "express";
import { config } from "dotenv";
const app = express();
config();

app.listen(process.env.PORT || 3000).on("error", (e: Errback) => {
    console.log("Error in listening to port", e);
});
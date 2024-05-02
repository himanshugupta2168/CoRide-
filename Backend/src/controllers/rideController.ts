import { PrismaClient } from "@prisma/client";
import {Request , Response} from "express"
const primsa = new PrismaClient()


export const  createRide = async(req:Request, res:Response)=>{
    try{
        const {source, destination , departureTime, ETA, seatsRemaining, Fare}= req.body;
        
    }
    catch(e){

    }
}
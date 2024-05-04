import { PrismaClient } from "@prisma/client";
import {Request , Response} from "express"
const prisma = new PrismaClient()


export const createRide = async(req:Request, res:Response)=>{
    try{
        const {source, destination , departureTime, ETA, seatsRemaining, fare,email}= req.body;

        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if(!user){
            res.status(404).json({
                msg:"User not found"
            });
        } else{
            
        }
        
    }
    catch(e){

    }
}
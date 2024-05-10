import { PrismaClient } from "@prisma/client";
import {Request , Response} from "express"
const prisma = new PrismaClient()


export const createRide = async(req:Request, res:Response)=>{
    try{
        const {source, destination, departureTime, ETA, date, seatsRemaining, vehicle, fare}= req.body.values;
        // date = date.split("T")[0];
        // console.log(req.body);
        console.log(`${date.split("T")[0]} ${departureTime}`);
        const {company,model} = vehicle.split('-');

        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email,
            },
        });

        const vId = await prisma.vehicle.findFirst({
            where:{
                Company:company,
                model
            }
        });
        if(!user){
            throw new Error("User not found");
            
            // return res.status(404).json({
            //     msg:"User not found"
            // });
        }
        const rideCreation = await prisma.ride.create({
            data:{
                driver:{
                    connect:{
                        userId:user.userId
                    }
                },
                vehicle:{
                    connect:{
                        vehicleId:vId?.vehicleId
                    }
                },
                origin:source,
                price:parseFloat(fare),
                destination,
                departureTime:`${date.split("T")[0]}T${departureTime}:00Z`,
                EstimatedArrivalTime:`${date.split("T")[0]}T${ETA}:00Z`,
                seatsRemaining

            }
        })

        return res.status(200).json({
            message:"Ride created successfully"
        })
        
    }
    catch(e:any){
        console.log("error");
        console.error(e);
        res.status(500).json({
            message:e
        })
    }
}


export const  getRides = async(req:Request,res:Response)=>{
    try {
        const email:string | undefined = req.query.email as string | undefined;
        const user = await prisma.user.findFirst({
            where:{
              email
            },
            select:{
              userId:true
            }
          })
          if(!user){
            return res.status(404).json({
              success: false,
              message: "User not found"
            })
          } else{
            
          }
    } catch (error) {
        
    }
}
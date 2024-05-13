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


export const fetchRides =async (req:Request, res:Response)=>{
    try{
        const {SC, DC , date , seats }= req.query;
        if (!date || !SC || !DC || !seats){
            return res.status(200).json({
                success:false, 
                error :"Please provide all the trip details",
            })
        }
        const rides = await prisma.ride.findMany({
            where: {
                origin: {contains: SC ? SC.toString(): undefined },
                destination: {startsWith: DC ? DC.toString() : undefined },
            }
        });
        const filteredRides = rides.filter(ride => {
            // Compare entire date string with departureTime
            const tofilterDate= new Date(date.toString());
            return (
                tofilterDate.toISOString().split('T')[0]===ride.departureTime.toISOString().split('T')[0]
                &&
                seats<= ride.seatsRemaining.toString()
            );
        });
        return res.status(200).json({
            success:true, 
            mesaage:"Rides fetched Successfully", 
            rides:filteredRides,
        })
    }
    catch(e:any){
          return res.status(500).json({
            success:false, 
            message :"Error in finding rides", 
            error : e.mesaage
          })
    }
}

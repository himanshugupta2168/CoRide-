import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();
import { stripe } from "..";

export const publishableKey = (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    PublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

export const checkout = async (req: Request, res: Response) => {
  try {
    const { rideDetails } = req.body;
    // console.log(req.body);
    const user = await prisma.user.findFirst({
      where: {
        email: rideDetails.useremail,
      },
    });
    const ride = await prisma.ride.findFirst({
      where: {
        rideId: rideDetails.rideId,
      },
    });
    if (!req.body.paymentMode) {
      const Response = await prisma.booking.create({
        data: {
          bookingStatus: "pending",
          paymentStatus: "Cash",
          rideId: Number(ride?.rideId),
          riderId: Number(user?.userId),
          seatsRequired: Number(rideDetails.seatsRequired),
          driverId: Number(rideDetails.driverId),
        },
      });
      return res.status(200).json({
        success: "true ",
        data: "Ride request added successfully",
        mode: "Cash",
      });
    } else {
        const paymentIntent= await stripe.paymentIntents.create({
            currency:"inr", 
            amount:19999, 
            automatic_payment_methods:{
                enabled:true,
            }
        }) 
        res.send({clientSecret:paymentIntent.client_secret});
    }
  } catch (e: any) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

// export const paymentIntent = async(req:Request, res:Response)=>{
//     const paymentIntent= await stripe.paymentIntents.create({
//         currency:"inr", 
//         amount:19999, 
//         automatic_payment_methods:{
//             enabled:true,
//         }
//     }) 
// }
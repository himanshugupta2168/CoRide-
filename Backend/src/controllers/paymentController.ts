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
      const product = await stripe.products.create({
        name: rideDetails.destination + rideDetails.origin,
      });
      var price = await stripe.prices.create({
        product: `${product.id}`,
        unit_amount: rideDetails.amount * 100,
        currency: "inr",
      });
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: `${price.id}`,
            quantity: 1,
          },
        ],
        customer_email:"test@coride.com",
        mode: "payment",
        success_url: "http://localhost:8000/api/v1/payments/success",
        cancel_url: "http://localhost:8000/api/v1/payments/cancel",
      });
      if (session.url){
        res.redirect(303, session.url)
      }
      else{
        throw new Error ("Unable to handle stripe payment interface")
      }
    }
  } catch (e: any) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

export const payment = async (req: any, res: any) => {
  console.log(req);
  return res.status(200).json({
    success: true,
  });
};

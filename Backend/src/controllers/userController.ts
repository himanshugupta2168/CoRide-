import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const signUp = async (req: Request, res: Response) => {
  // console.log("hello");
  try {
    console.log(req.body);
    // return res.send("hello");
    const {nickname, name, picture, email}= req.body;
    // // Check if the user already exist
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      // If the user doesn't exist, create them
      await prisma.user.create({
        data: {
          email: email,
          fullName:nickname, 
          userName:name,
          profile_picture:picture,
        },
      });
      return res.status(200).json({
        success: true,
        message: "User Created",
      });
    } else {
      // If the user already exists, return a message indicating that
      return res.status(200).json({
        success: false,
        message: "User already exists",
      });
    }
  } catch (e: any) {
    return res.status(500).json({
      success: false,
      message: "User and DB sync error",
      error: e.message,
    });
  }
};

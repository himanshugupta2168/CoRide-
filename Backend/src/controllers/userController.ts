import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Check if the user already exists
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
        },
      });
      return res.status(200).json({
        success: true,
        message: "User Created",
      });
    } else {
      // If the user already exists, return a message indicating that
      return res.status(400).json({
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

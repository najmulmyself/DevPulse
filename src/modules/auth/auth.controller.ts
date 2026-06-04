import type { Request, Response } from "express";

const userLogin = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "User Logged in Successfully",
  });
};

export const authController = {
  userLogin,
};

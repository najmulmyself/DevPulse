import type { Request, Response } from "express";
import { userService } from "./auth.service";

const userLogin = async (req: Request, res: Response) => {
  const result = await userService.loginUserIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "User Logged in Successfully",
    data: result,
  });
};

const userSignUp = async (req: Request, res: Response) => {
  const result = await userService.createUserIntoDB(req.body);

  res.status(201).json({
    success: true,
    message: "User Created Successfully",
    data: result.rows[0],
  });
};

export const authController = {
  userLogin,
  userSignUp,
};

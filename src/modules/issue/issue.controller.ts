import type { Request, Response } from "express";

const getAllIssues = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Issues retrieved Successfully",
    data: null,
  });
};

export const issueController = {
  getAllIssues,
};

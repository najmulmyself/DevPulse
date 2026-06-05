import type { Request, Response } from "express";
import { issueService } from "./issue.service";

const getAllIssues = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Issues retrieved Successfully",
    data: null,
  });
};

const createIssue = async (req: Request, res: Response) => {
  const result = await issueService.createIssueIntoDB(req.body);
  res.status(201).json({
    success: true,
    message: "Issue created sucessfully",
    data: result,
  });
};

export const issueController = {
  getAllIssues,
  createIssue,
};

import Router from "express";
import { issueController } from "./issue.controller";

const router = Router();

router.get("/", issueController.getAllIssues);

export const issueRoute = router;

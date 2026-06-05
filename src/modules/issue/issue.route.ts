import Router from "express";
import { issueController } from "./issue.controller";
import auth from "../../middleware/auth";

const router = Router();

router.get("/", issueController.getAllIssues);
router.post("/", auth(), issueController.createIssue);

export const issueRoute = router;

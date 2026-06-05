import express from "express";
import { issueRoute } from "./modules/issue/issue.route";
import { authRoute } from "./modules/auth/auth.route";
import {Pool} from "pg";
const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/issues", issueRoute);

export default app;

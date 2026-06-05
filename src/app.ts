import express from "express";
import { issueRoute } from "./modules/issue/issue.route";
import { authRoute } from "./modules/auth/auth.route";
import {Pool} from "pg";
const app = express();

const pool = new Pool({
    connectionString : "postgresql://neondb_owner:npg_O6uqRmvIP9np@ep-late-paper-aql1kb2l-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/issues", issueRoute);

export default app;

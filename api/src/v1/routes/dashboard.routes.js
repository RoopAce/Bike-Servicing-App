import { Router } from "express";
import { getDashboardData } from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/get-data", getDashboardData);

export default router;

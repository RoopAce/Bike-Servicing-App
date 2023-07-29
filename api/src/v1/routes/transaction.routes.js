import { Router } from "express";
import { createTransaction, getTransactions } from "../controllers/transaction.controller.js";

const router = Router();

router.post("/create", createTransaction);
router.get("/get-data", getTransactions)

export default router;

import express from "express";
import { addBankroll, deleteBankroll, getBankroll, updateBankroll } from "../controllers/bankroll.js";

const router = express.Router()

router.get("/:id", getBankroll);
router.post("/add", addBankroll);
router.delete("/:id", deleteBankroll);
router.put("/:id", updateBankroll);

export default router
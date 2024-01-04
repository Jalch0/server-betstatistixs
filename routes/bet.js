import express from "express";
import { getBet, addBet, updateBet, deleteBet, getBets} from "../controllers/bet.js";

const router = express.Router()

router.get("/all/:id", getBets);
router.get("/:id", getBet);
router.post("/add", addBet);
router.delete("/:id", deleteBet);
router.put("/:id", updateBet);

export default router
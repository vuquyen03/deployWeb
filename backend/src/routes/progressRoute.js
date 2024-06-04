import express from "express";
import progressController from "../controllers/progressController.js";

const router = express.Router();

// GET PROGRESS
router.get("/", progressController.getProgress);

// UPDATE PROGRESS
router.put("/update", progressController.updateProgress);

export default router;
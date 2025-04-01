// routes/cropRoutes.js
import express from "express";
import { createCrop, getAllCrops } from "../controllers/crop.controllers.js";

const router = express.Router();

router.route("/").get(getAllCrops);
router.route("/create").post(createCrop);

export default router;

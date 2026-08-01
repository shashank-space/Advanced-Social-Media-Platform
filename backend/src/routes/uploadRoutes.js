import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadMedia } from "../controllers/uploadController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  upload.single("file"),
  uploadMedia
);

export default router;
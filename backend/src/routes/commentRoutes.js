import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  addComment,
  getComments,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.get("/:postId", getComments);

router.post("/:postId", authMiddleware, addComment);

router.delete(
  "/:postId/:commentId",
  authMiddleware,
  deleteComment
);

export default router;
import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", authMiddleware, createPost);

router.put("/:id", authMiddleware, updatePost);

router.put("/like/:id", authMiddleware, likePost);

router.delete("/:id", authMiddleware, deletePost);

export default router;
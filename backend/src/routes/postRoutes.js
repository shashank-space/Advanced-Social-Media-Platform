import express from "express";

import {
  createPost,
  getPosts,
  getPost,
  deletePost,
  likePost,
  getFeed,
} from "../controllers/postController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", authMiddleware, createPost);

router.delete("/:id", authMiddleware, deletePost);

router.put("/like/:id", authMiddleware, likePost);

router.get("/feed/all", getFeed);

export default router;
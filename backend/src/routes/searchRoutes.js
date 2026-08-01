import express from "express";

import {
  searchUsers,
  searchPosts,
  trendingPosts,
} from "../controllers/searchController.js";

const router = express.Router();

router.get("/users", searchUsers);

router.get("/posts", searchPosts);

router.get("/trending", trendingPosts);

export default router;
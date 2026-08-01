import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {

getNotifications,
markAsRead,
deleteNotification,

} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", authMiddleware, getNotifications);

router.put("/:id", authMiddleware, markAsRead);

router.delete("/:id", authMiddleware, deleteNotification);

export default router;
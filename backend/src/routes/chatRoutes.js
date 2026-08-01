import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";


import {

createChat,
getChats,
getMessages,
sendMessage,

} from "../controllers/chatController.js";

const router = express.Router();

router.post("/", authMiddleware, createChat);

router.get("/", authMiddleware, getChats);

router.get("/:chatId", authMiddleware, getMessages);

router.post("/:chatId", authMiddleware, sendMessage);

export default router;
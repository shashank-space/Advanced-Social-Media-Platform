import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

// Create Chat
export const createChat = async (req, res) => {
  try {

    const { receiverId } = req.body;

    let chat = await Chat.findOne({
      members: {
        $all: [req.user.id, receiverId],
      },
    });

    if (chat) {
      return res.json({
        success: true,
        chat,
      });
    }

    chat = await Chat.create({
      members: [req.user.id, receiverId],
    });

    res.status(201).json({
      success: true,
      chat,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get User Chats
export const getChats = async (req, res) => {

  try {

    const chats = await Chat.find({
      members: req.user.id,
    }).populate("members", "username avatar");

    res.json({
      success: true,
      chats,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Messages
export const getMessages = async (req, res) => {

  try {

    const messages = await Message.find({
      chat: req.params.chatId,
    }).populate("sender", "username avatar");

    res.json({
      success: true,
      messages,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Send Message
export const sendMessage = async (req, res) => {

  try {

    const { text, image } = req.body;

    const message = await Message.create({

      chat: req.params.chatId,

      sender: req.user.id,

      text,

      image,

    });

    res.status(201).json({

      success: true,

      message,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
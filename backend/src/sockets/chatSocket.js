import Message from "../models/Message.js";

export default function chatSocket(io) {

  io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);

    socket.on("join-chat", (chatId) => {

      socket.join(chatId);

    });

    socket.on("typing", (data) => {

      socket.to(data.chatId).emit("typing", data);

    });

    socket.on("stop-typing", (chatId) => {

      socket.to(chatId).emit("stop-typing");

    });

    socket.on("send-message", async (data) => {

      const message = await Message.create({

        chat: data.chatId,

        sender: data.sender,

        text: data.text,

        image: data.image || "",

      });

      io.to(data.chatId).emit(

        "receive-message",

        message

      );

    });

    socket.on("disconnect", () => {

      console.log("Disconnected");

    });

  });

}
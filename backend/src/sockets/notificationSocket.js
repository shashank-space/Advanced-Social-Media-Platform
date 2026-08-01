import Notification from "../models/Notification.js";

export default function notificationSocket(io) {

  io.on("connection", (socket) => {

    socket.on("join-user", (userId) => {

      socket.join(`user-${userId}`);

    });

    socket.on("send-notification", async (data) => {

      const notification = await Notification.create({

        receiver: data.receiver,

        sender: data.sender,

        type: data.type,

        post: data.post,

      });

      io.to(`user-${data.receiver}`).emit(

        "notification",

        notification

      );

    });

  });

}
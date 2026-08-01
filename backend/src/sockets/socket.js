import { Server } from "socket.io";

import chatSocket from "./chatSocket.js";
import notificationSocket from "./notificationSocket.js";

let io;

export const initializeSocket = (server) => {

  io = new Server(server, {

    cors: {

      origin: process.env.FRONTEND_URL,

      credentials: true,

    },

  });

  chatSocket(io);

  notificationSocket(io);

};

export { io };
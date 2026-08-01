import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app.js";
import connectDB from "./config/db.js";
import { initializeSocket } from "./sockets/socket.js";

const PORT = process.env.PORT || 5000;

await connectDB();

const server = http.createServer(app);

initializeSocket(server);

server.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Backend Running");
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("=================================");
});
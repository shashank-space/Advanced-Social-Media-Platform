import api from "./api";

export const getChats = () =>
  api.get("/chats");

export const getMessages = (
  chatId
) =>
  api.get(
    `/chats/${chatId}`
  );

export const sendMessage = (
  chatId,
  data
) =>
  api.post(
    `/chats/${chatId}`,
    data
  );
import api from "./api";

export const searchUsers =
  async (query) => {
    const res =
      await api.get(
        `/search/users?q=${query}`
      );

    return res.data;
  };

export const searchPosts =
  async (query) => {
    const res =
      await api.get(
        `/search/posts?q=${query}`
      );

    return res.data;
  };
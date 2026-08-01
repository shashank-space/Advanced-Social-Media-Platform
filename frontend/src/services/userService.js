import api from "./api";

export const getUserProfile = async (
  userId
) => {
  const res = await api.get(
    `/users/${userId}`
  );

  return res.data;
};

export const updateProfile = async (
  profileData
) => {
  const res = await api.put(
    "/users/profile",
    profileData
  );

  return res.data;
};

export const followUser = async (
  userId
) => {
  const res = await api.post(
    `/users/${userId}/follow`
  );

  return res.data;
};

export const unfollowUser =
  async (userId) => {
    const res = await api.post(
      `/users/${userId}/unfollow`
    );

    return res.data;
  };

export const getSuggestedUsers =
  async () => {
    const res = await api.get(
      "/users/suggestions"
    );

    return res.data;
  };

export const searchUsers =
  async (query) => {
    const res = await api.get(
      `/users/search?q=${query}`
    );

    return res.data;
  };
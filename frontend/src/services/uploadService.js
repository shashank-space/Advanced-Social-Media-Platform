import api from "./api";

export const uploadImage =
  async (file) => {
    const formData =
      new FormData();

    formData.append(
      "image",
      file
    );

    const res = await api.post(
      "/upload/image",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    return res.data;
  };

export const uploadVideo =
  async (file) => {
    const formData =
      new FormData();

    formData.append(
      "video",
      file
    );

    const res = await api.post(
      "/upload/video",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    return res.data;
  };
import { useState } from "react";

import ImageUpload from "../upload/ImageUpload";
import VideoUpload from "../upload/VideoUpload";

export default function CreatePost() {
  const [content, setContent] =
    useState("");

  const [imageUrl, setImageUrl] =
    useState("");

  const [videoUrl, setVideoUrl] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      content,
      imageUrl,
      videoUrl,
    });

    setContent("");
    setImageUrl("");
    setVideoUrl("");
  };

  return (
    <div className="glass rounded-2xl p-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) =>
            setContent(
              e.target.value
            )
          }
          placeholder="What's happening?"
          className="
            w-full
            bg-transparent
            outline-none
            resize-none
          "
          rows={4}
        />

        <ImageUpload
          onUpload={setImageUrl}
        />

        <VideoUpload
          onUpload={setVideoUrl}
        />

        <button
          type="submit"
          className="
            mt-4
            px-4
            py-2
            bg-violet-600
            rounded-lg
          "
        >
          Post
        </button>
      </form>
    </div>
  );
}
import { useState } from "react";
import { uploadVideo } from "../../services/uploadService";

export default function VideoUpload({
  onUpload,
}) {
  const [preview, setPreview] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPreview(
      URL.createObjectURL(file)
    );

    try {
      setLoading(true);

      const data =
        await uploadVideo(file);

      onUpload?.(data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {preview && (
        <video
          controls
          className="
            w-full
            rounded-xl
          "
        >
          <source
            src={preview}
          />
        </video>
      )}

      <input
        type="file"
        accept="video/*"
        onChange={handleChange}
      />

      {loading && (
        <p>Uploading...</p>
      )}
    </div>
  );
}
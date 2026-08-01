import { useState } from "react";
import { uploadImage } from "../../services/uploadService";

export default function ImageUpload({
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
        await uploadImage(file);

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
        <img
          src={preview}
          alt="preview"
          className="
            w-full
            max-h-80
            object-cover
            rounded-xl
          "
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {loading && (
        <p>Uploading...</p>
      )}
    </div>
  );
}
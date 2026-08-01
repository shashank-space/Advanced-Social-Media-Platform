import { useState } from "react";

export default function PrivacySettings() {
  const [isPrivate, setIsPrivate] =
    useState(false);

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Privacy
      </h2>

      <label className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={isPrivate}
          onChange={() =>
            setIsPrivate(!isPrivate)
          }
        />

        Private Account
      </label>
    </div>
  );
}
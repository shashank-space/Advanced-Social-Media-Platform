import { useState } from "react";

export default function NotificationSettings() {
  const [enabled, setEnabled] =
    useState(true);

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Notifications
      </h2>

      <label className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() =>
            setEnabled(!enabled)
          }
        />

        Enable Notifications
      </label>
    </div>
  );
}
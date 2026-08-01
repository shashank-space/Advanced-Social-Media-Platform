import { useState } from "react";

export default function FollowButton() {
  const [following, setFollowing] =
    useState(false);

  return (
    <button
      onClick={() =>
        setFollowing(!following)
      }
      className="
        px-4
        py-2
        rounded-lg
        bg-violet-600
      "
    >
      {following
        ? "Following"
        : "Follow"}
    </button>
  );
}
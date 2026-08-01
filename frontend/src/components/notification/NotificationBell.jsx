import { Bell } from "lucide-react";

export default function NotificationBell({
  count,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="relative"
    >
      <Bell size={22} />

      {count > 0 && (
        <span
          className="
          absolute
          -top-2
          -right-2
          bg-red-500
          text-white
          text-xs
          rounded-full
          h-5
          w-5
          flex
          items-center
          justify-center
        "
        >
          {count}
        </span>
      )}
    </button>
  );
}
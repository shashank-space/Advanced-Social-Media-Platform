export default function NotificationItem({
  notification,
}) {
  return (
    <div className="glass p-4 rounded-xl">
      <p>{notification.message}</p>

      <span className="text-xs text-gray-400">
        {notification.time}
      </span>
    </div>
  );
}
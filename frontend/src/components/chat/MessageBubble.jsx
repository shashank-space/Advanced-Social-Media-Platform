export default function MessageBubble({
  message,
  isOwn,
}) {
  return (
    <div
      className={`flex ${
        isOwn
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-xs
          px-4
          py-2
          rounded-2xl
          ${
            isOwn
              ? "bg-violet-600"
              : "glass"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  );
}
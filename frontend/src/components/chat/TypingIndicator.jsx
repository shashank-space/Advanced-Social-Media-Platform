export default function TypingIndicator({
  typingUser,
}) {
  if (!typingUser) return null;

  return (
    <div className="text-sm text-gray-400 px-2">
      {typingUser} is typing...
    </div>
  );
}
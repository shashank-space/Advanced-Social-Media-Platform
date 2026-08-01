export default function ChatList() {
  const chats = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Alice",
    },
  ];

  return (
    <div className="space-y-3">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="
            glass
            p-4
            rounded-xl
            cursor-pointer
          "
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}
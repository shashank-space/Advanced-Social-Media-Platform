import { useState } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow() {
  const [message, setMessage] =
    useState("");

  const messages = [
    {
      id: 1,
      content: "Hello 👋",
      sender: "other",
    },
    {
      id: 2,
      content: "Hi there!",
      sender: "me",
    },
  ];

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    console.log(message);

    setMessage("");
  };

  return (
    <div className="flex flex-col h-full">

      <div className="flex-1 space-y-3 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isOwn={
              msg.sender === "me"
            }
          />
        ))}
      </div>

      <TypingIndicator
        typingUser="John"
      />

      <form
        onSubmit={sendMessage}
        className="flex gap-2 mt-4"
      >
        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Type a message..."
          className="
            flex-1
            p-3
            rounded-xl
            text-black
          "
        />

        <button
          className="
            px-5
            bg-violet-600
            rounded-xl
          "
        >
          Send
        </button>
      </form>

    </div>
  );
}
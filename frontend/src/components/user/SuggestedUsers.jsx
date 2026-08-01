import UserCard from "./UserCard";

export default function SuggestedUsers() {
  const users = [
    {
      _id: 1,
      name: "John Doe",
      username: "john",
    },
    {
      _id: 2,
      name: "Alice",
      username: "alice",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        Suggested Users
      </h2>

      {users.map((user) => (
        <UserCard
          key={user._id}
          user={user}
        />
      ))}
    </div>
  );
}
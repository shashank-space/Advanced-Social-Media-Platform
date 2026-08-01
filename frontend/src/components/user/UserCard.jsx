import FollowButton from "./FollowButton";

export default function UserCard({
  user,
}) {
  return (
    <div
      className="
      glass
      p-4
      rounded-xl
      flex
      items-center
      justify-between
    "
    >
      <div>
        <h3>
          {user.name}
        </h3>

        <p>
          @{user.username}
        </p>
      </div>

      <FollowButton />
    </div>
  );
}
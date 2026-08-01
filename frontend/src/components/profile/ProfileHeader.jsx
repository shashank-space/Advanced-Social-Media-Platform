export default function ProfileHeader({
  user,
}) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-6">

        <img
          src={
            user?.avatar ||
            "https://via.placeholder.com/120"
          }
          alt="profile"
          className="w-28 h-28 rounded-full object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {user?.name}
          </h1>

          <p className="text-gray-400">
            @{user?.username}
          </p>

          <p className="mt-2">
            {user?.bio}
          </p>
        </div>

      </div>
    </div>
  );
}
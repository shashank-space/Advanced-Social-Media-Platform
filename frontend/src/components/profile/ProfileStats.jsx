export default function ProfileStats({
  followers,
  following,
  posts,
}) {
  return (
    <div className="glass rounded-2xl p-6 mt-4">
      <div className="flex justify-around">

        <div>
          <h3 className="text-2xl font-bold">
            {posts}
          </h3>
          <p>Posts</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {followers}
          </h3>
          <p>Followers</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {following}
          </h3>
          <p>Following</p>
        </div>

      </div>
    </div>
  );
}
import LikeButton from "./LikeButton";

export default function PostCard({
  post,
}) {
  return (
    <div className="glass rounded-2xl p-4 mb-4">
      <h3 className="font-bold">
        {post.author}
      </h3>

      <p className="mt-2">
        {post.content}
      </p>

      <div className="mt-4 flex gap-4">
        <LikeButton />

        <button>💬 Comment</button>
      </div>
    </div>
  );
}
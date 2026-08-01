import { usePosts }
from "../../context/PostContext";

import PostCard
from "../post/PostCard";

export default function Feed() {
  const { posts } =
    usePosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
        />
      ))}
    </div>
  );
}
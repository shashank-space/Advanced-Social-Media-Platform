import { useState } from "react";
import { PostContext } from "./PostContext";

export function PostProvider({ children }) {

  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
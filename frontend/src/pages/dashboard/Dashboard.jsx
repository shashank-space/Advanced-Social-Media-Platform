import MainLayout from "../../layouts/MainLayout";

import CreatePost from "../../components/post/CreatePost";
import Feed from "../../components/feed/Feed";

import { useEffect } from "react";

import {
  usePosts
} from "../../context/PostContext";

import {
  getPosts
} from "../../services/postService";

import SuggestedUsers
from "../../components/user/SuggestedUsers";

export default function Dashboard() {
  const { setPosts } = usePosts();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, [setPosts]);

  return (
    <MainLayout>
      <CreatePost />

      <Feed />
      <SuggestedUsers />
    </MainLayout>
  );
}
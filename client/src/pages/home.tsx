import { useState, useEffect } from "react";
import { AddPost } from "../components/addPost";
import { Post } from "../components/post";
import { PostSkeleton } from "../components/postSkeleton";
import { getAllPosts } from "../controllers/post";
import { ExtendedPostSchema } from "../models/post";
import { Layout } from "./layout";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ExtendedPostSchema[]>([]);

  useEffect(() => {
    getAllPosts().then((res) => {
      res && setPosts(res);
      setIsLoading(false);
    });
  }, []);

  const onPost = (post: ExtendedPostSchema) => {
    setPosts([post, ...posts]);
  };

  const onDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Layout>
      <AddPost onPost={onPost} />
      {isLoading ? (
        <>
          <PostSkeleton />
        </>
      ) : (
        <>
          {posts.map((post) => (
            <Post key={post.id} onDelete={onDelete} {...post} />
          ))}
        </>
      )}
    </Layout>
  );
};

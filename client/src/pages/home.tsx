import { Box } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Post } from "../components/post";
import { getAllPosts } from "../controllers/post";
import { ExtendedPostSchema } from "../models/post";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ExtendedPostSchema[]>([]);

  useEffect(() => {
    getAllPosts().then((res) => {
      res && setPosts(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box bg="#FAFAFA" minH="100vh">
      <Navbar />
      <Container maxW="xl">
        {isLoading ? (
          <Spinner size="xs" />
        ) : (
          <>
            {posts.map((post) => (
              <Post {...post} />
            ))}
          </>
        )}
      </Container>
    </Box>
  );
};

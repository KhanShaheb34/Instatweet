import { Box } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Post } from "../components/post";

export const Home = () => {
  return (
    <Box bg="#FAFAFA" minH="100vh">
      <Navbar />
      <Container maxW="xl">
        <Post />
        <Post />
      </Container>
    </Box>
  );
};

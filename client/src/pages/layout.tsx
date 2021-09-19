import { Box, Container } from "@chakra-ui/layout";
import { Navbar } from "../components/navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg="#FAFAFA" minH="100vh">
      <Navbar />
      <Container pt="80px" maxW="xl">
        {children}
      </Container>
    </Box>
  );
};

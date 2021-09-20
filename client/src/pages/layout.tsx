import { Box, Container } from "@chakra-ui/layout";
import { Redirect } from "react-router";
import { Navbar } from "../components/navbar";
import { useAppSelector } from "../redux/ReduxStore";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <Box bg="#FAFAFA" minH="100vh">
      <Navbar />
      <Container pt="80px" maxW="xl">
        {children}
      </Container>
    </Box>
  );
};

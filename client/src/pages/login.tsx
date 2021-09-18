import { Box, Heading } from "@chakra-ui/layout";
import { LoginForm } from "../components/loginForm";
import { SignupForm } from "../components/signupForm";

export const Login = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        border="1px solid #DBDBDB"
        rounded="sm"
        p={5}
        maxW={800}
        display="flex"
        flexDirection="column"
      >
        <Heading mb={3} textAlign="center" fontWeight="light">
          Login or Sign Up
        </Heading>
        <Box display="flex">
          <LoginForm />
          <SignupForm />
        </Box>
      </Box>
    </Box>
  );
};

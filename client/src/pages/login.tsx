import { Box, Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { Redirect } from "react-router";
import { LoginForm } from "../components/loginForm";
import { Logo } from "../components/logo";
import { SignupForm } from "../components/signupForm";
import { useAppSelector } from "../redux/ReduxStore";

export const Login = () => {
  const [login, setLogin] = useState(true);

  const { isLoggedIn } = useAppSelector((state) => state.auth);

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="#FAFAFA"
    >
      <Box
        border="1px solid #DBDBDB"
        rounded="sm"
        p={5}
        maxW={800}
        display="flex"
        flexDirection="column"
        alignItems="center"
        m={2}
        background="white"
        minW="35%"
      >
        <Logo noLink />
        <Heading mb={3} size="lg" textAlign="center" fontWeight="light">
          {login ? "Login" : "Sign Up"}
        </Heading>
        {login ? <LoginForm /> : <SignupForm onSignUp={() => setLogin(true)} />}
        <Text
          color="teal"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
          onClick={() => setLogin(!login)}
        >
          {login ? "Don't have an account?" : "Already have an account!"}
        </Text>
      </Box>
    </Box>
  );
};

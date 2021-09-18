import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { signup } from "../controllers/auth";
import { useToast } from "@chakra-ui/toast";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const success = await signup(username, email, password);
    toast({
      title: success
        ? "Account Created. Please log in."
        : "Username or email already exists.",
      status: success ? "success" : "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box
      as="form"
      flexGrow={1}
      p={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        mb={2}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isRequired
        placeholder="Username"
      />
      <Input
        type="email"
        mb={2}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired
        placeholder="Email"
      />
      <Input
        type="password"
        mb={3}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isRequired
        placeholder="Password"
      />
      <Button colorScheme="teal" type="submit" variant="solid">
        Sign Up
      </Button>
    </Box>
  );
};

import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";

export const SignupForm = () => {
  return (
    <Box
      flexGrow={1}
      p={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Input type="text" mb={2} isRequired placeholder="Username" />
      <Input type="email" mb={2} isRequired placeholder="Email" />
      <Input type="password" mb={3} isRequired placeholder="Password" />
      <Button colorScheme="teal" variant="solid">
        Sign Up
      </Button>
    </Box>
  );
};

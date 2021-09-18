import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";

export const LoginForm = () => {
  return (
    <Box
      flexGrow={1}
      p={3}
      borderRight="1px solid #DBDBDB"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Input type="text" mb={2} isRequired placeholder="Username" />
      <Input type="password" mb={3} isRequired placeholder="Password" />
      <Button colorScheme="teal" variant="solid">
        Login
      </Button>
    </Box>
  );
};

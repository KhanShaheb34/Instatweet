import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { loginController } from "../controllers/auth";
import { useToast } from "@chakra-ui/toast";
import { useAppDispatch } from "../redux/ReduxStore";
import { login } from "../redux/slices/sliceAuth";
import { useHistory } from "react-router";
import { AppRouteUi } from "../config/appRoutes";
import { Spinner } from "@chakra-ui/spinner";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const data = await loginController(username, password);
    if (data) {
      dispatch(login(data));
      history.push(AppRouteUi.Home());
    } else
      toast({
        title: "Wrong credentials",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    setIsLoading(false);
  };

  return (
    <Box
      as="form"
      flexGrow={1}
      p={3}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      onSubmit={handleSubmit}
      minW="80%"
    >
      <Input
        type="text"
        mb={2}
        value={username}
        onChange={(e) => setUsername(e.target.value.toLowerCase())}
        isRequired
        placeholder="Username"
      />
      <Input
        type="password"
        mb={3}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isRequired
        placeholder="Password"
      />
      <Button
        disabled={isLoading}
        colorScheme="teal"
        type="submit"
        variant="solid"
      >
        {isLoading && <Spinner />} Login
      </Button>
    </Box>
  );
};

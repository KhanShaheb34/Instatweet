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

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
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
  };

  return (
    <Box
      as="form"
      flexGrow={1}
      p={3}
      borderRight="1px solid #DBDBDB"
      display="flex"
      justifyContent="center"
      flexDirection="column"
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
        type="password"
        mb={3}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isRequired
        placeholder="Password"
      />
      <Button colorScheme="teal" type="submit" variant="solid">
        Login
      </Button>
    </Box>
  );
};

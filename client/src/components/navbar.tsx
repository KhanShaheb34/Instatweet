import { Box } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { useAppSelector } from "../redux/ReduxStore";
import { Link } from "react-router-dom";
import { AppRouteUi } from "../config/appRoutes";
import { IconButton } from "@chakra-ui/button";
import { FiLogOut } from "react-icons/fi";
import { Logo } from "./logo";

export const Navbar = () => {
  const { username } = useAppSelector((state) => state.auth);

  return (
    <Box
      w="100%"
      display="block"
      borderBottom="1px solid #DBDBDB"
      background="#fff"
      p={4}
      top={0}
      position="fixed"
      zIndex="banner"
    >
      <Container display="flex" justifyContent="space-between" maxW="xl">
        <Logo />
        <Box display="flex" alignItems="center">
          <Avatar
            as={Link}
            to={`/${username}`}
            src={`https://avatars.dicebear.com/api/micah/${username}.svg`}
            width="40px"
            height="40px"
            border="1px solid #DBDBDB"
          />
          <IconButton
            as={Link}
            to={AppRouteUi.Logout()}
            variant="outline"
            colorScheme="red"
            aria-label="Delete Comment"
            ml={3}
            icon={<FiLogOut />}
            size="sm"
          />
        </Box>
      </Container>
    </Box>
  );
};

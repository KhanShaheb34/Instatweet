import { Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { AppRouteUi } from "../config/appRoutes";

export const Logo = () => (
  <Text
    fontWeight="bolder"
    fontSize={35}
    fontFamily="'Fleur De Leah', cursive"
    lineHeight="40px"
    as={Link}
    to={AppRouteUi.Home()}
  >
    InstaTweet
  </Text>
);

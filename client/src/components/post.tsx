import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { BsChatSquare, BsHeartFill } from "react-icons/bs";

export const Post = () => {
  return (
    <Box border="1px solid #DBDBDB" my={4} rounded="md" bg="white">
      <Box py={2} px={3} display="flex" alignItems="center">
        <Avatar
          src="https://avatars.dicebear.com/api/micah/mobin.svg"
          width="40px"
          height="40px"
          border="1px solid #DBDBDB"
        />
        <Text ml={3} fontWeight="bold">
          user_name
        </Text>
      </Box>
      <Box
        bg="purple.700"
        color="white"
        minH="250px"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading p={5}>lorem ipsum dolor sit amen...</Heading>
      </Box>
      <Box p={3} display="flex" justifyContent="space-between">
        <Box display="flex" fontSize={30}>
          <BsHeartFill style={{ marginRight: "15px", color: "#ED4956" }} />
          <BsChatSquare />
        </Box>
        <Text fontSize="sm">12 likes and 15 comments</Text>
      </Box>
    </Box>
  );
};

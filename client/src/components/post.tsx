import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { ExtendedPostSchema } from "../models/post";
import { useAppSelector } from "../redux/ReduxStore";
import { MotionBox } from "./motionBox";
import { likePost } from "../controllers/post";

export const Post = (props: ExtendedPostSchema) => {
  const { id } = useAppSelector((state) => state.auth);
  const ownPost = props.userId === id;

  const [liked, setLiked] = useState(
    props.likes.filter((like) => like.userId === id).length > 0
  );

  const handleLike = () => {
    setLiked(!liked);
    likePost(props.id).then((res) => res && setLiked(res.message === "Liked"));
  };

  return (
    <Box
      border="1px solid #DBDBDB"
      my={4}
      key={props.id}
      rounded="md"
      bg="white"
    >
      <Box py={2} px={3} display="flex" alignItems="center">
        <Avatar
          src="https://avatars.dicebear.com/api/micah/mobin.svg"
          width="40px"
          height="40px"
          border="1px solid #DBDBDB"
        />
        <Text ml={3} fontWeight="bold">
          {props.user.username}
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
        <Heading p={5}>{props.content}</Heading>
      </Box>
      <Box p={3} display="flex" justifyContent="space-between">
        <Box display="flex" fontSize={30}>
          <MotionBox
            onClick={handleLike}
            cursor="pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {liked ? (
              <BsHeartFill style={{ marginRight: "15px", color: "#ED4956" }} />
            ) : (
              <BsHeart style={{ marginRight: "15px" }} />
            )}
          </MotionBox>
          <BsChatSquare />
        </Box>
        <Text fontSize="sm">
          {props.likes.length} likes and {props.comments.length} comments
        </Text>
      </Box>
    </Box>
  );
};

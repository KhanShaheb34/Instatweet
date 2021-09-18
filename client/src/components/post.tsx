import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { ExtendedPostSchema } from "../models/post";
import { useAppSelector } from "../redux/ReduxStore";
import { MotionBox } from "./motionBox";
import { likePost } from "../controllers/post";
import { useDisclosure } from "@chakra-ui/hooks";
import { CommentsModal } from "./comments";
import moment from "moment";

export const Post = (props: ExtendedPostSchema) => {
  const { id } = useAppSelector((state) => state.auth);
  const {
    isOpen: commentIsOpen,
    onOpen: commentOpen,
    onClose: commentClose,
  } = useDisclosure();
  const ownPost = props.userId === id;

  const [liked, setLiked] = useState(
    props.likes.filter((like) => like.userId === id).length > 0
  );

  const handleLike = () => {
    setLiked(!liked);
    likePost(props.id).then((res) => res && setLiked(res.message === "Liked"));
  };

  return (
    <>
      <Box
        border="1px solid #DBDBDB"
        my={4}
        key={props.id}
        rounded="md"
        bg="white"
      >
        <Box py={2} px={3} display="flex" alignItems="center">
          <Avatar
            src={`https://avatars.dicebear.com/api/micah/${props.user.username}.svg`}
            width="45px"
            height="45px"
            border="1px solid #DBDBDB"
          />
          <Box ml={3}>
            <Text fontWeight="bold">{props.user.username}</Text>
            <Text size="sm" fontWeight="light" color="#aaa">
              {moment(props.createdAt).fromNow()}
            </Text>
          </Box>
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
                <BsHeartFill
                  style={{ marginRight: "15px", color: "#ED4956" }}
                />
              ) : (
                <BsHeart style={{ marginRight: "15px" }} />
              )}
            </MotionBox>
            <MotionBox
              onClick={commentOpen}
              cursor="pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsChatSquare />
            </MotionBox>
          </Box>
          <Text fontSize="sm">
            {props.likes.length} likes and {props.comments.length} comments
          </Text>
        </Box>
      </Box>

      <CommentsModal
        isOpen={commentIsOpen}
        onClose={commentClose}
        postId={props.id}
      />
    </>
  );
};

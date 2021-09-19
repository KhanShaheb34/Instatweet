import { Avatar } from "@chakra-ui/avatar";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { BsChatSquare, BsHeart, BsHeartFill } from "react-icons/bs";
import { ExtendedPostSchema } from "../models/post";
import { useAppSelector } from "../redux/ReduxStore";
import { MotionBox } from "./motionBox";
import { likePost, deletePost } from "../controllers/post";
import { useDisclosure } from "@chakra-ui/hooks";
import { CommentsModal } from "./comments";
import moment from "moment";
import { IconButton } from "@chakra-ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import { useToast } from "@chakra-ui/toast";
import { Link } from "react-router-dom";

export const Post = (
  props: ExtendedPostSchema & { onDelete: (postId: string) => void }
) => {
  const { id } = useAppSelector((state) => state.auth);
  const {
    isOpen: commentIsOpen,
    onOpen: commentOpen,
    onClose: commentClose,
  } = useDisclosure();
  const ownPost = props.userId === id;

  const [liked, setLiked] = useState(
    props.likes?.filter((like) => like.userId === id).length > 0
  );
  const toast = useToast();

  const handleLike = () => {
    setLiked(!liked);
    likePost(props.id).then((res) => res && setLiked(res.message === "Liked"));
  };

  const handleDelete = () => {
    props.onDelete(props.id);
    const res = deletePost(props.id);
    toast({
      title: !!res ? "Post Deleted" : "Something went wrong",
      status: !!res ? "success" : "error",
      duration: 9000,
      isClosable: true,
    });
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
        <Box py={2} px={3} display="flex" justifyContent="space-between">
          <Box
            display="flex"
            alignItems="center"
            as={Link}
            to={`/${props.user.username}`}
          >
            <Avatar
              src={`https://avatars.dicebear.com/api/micah/${props.user.username}.svg`}
              width="40px"
              height="40px"
              border="1px solid #DBDBDB"
            />
            <Text ml={3} fontWeight="bold">
              {props.user.username}
            </Text>
          </Box>
          {ownPost && (
            <IconButton
              variant="outline"
              colorScheme="red"
              aria-label="Delete Comment"
              m={1}
              icon={<AiOutlineDelete />}
              size="sm"
              onClick={handleDelete}
            />
          )}
        </Box>

        <Box
          bg="teal.700"
          color="white"
          minH="250px"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading p={5} overflowWrap="break-word" maxW="100%">
            {props.content}
          </Heading>
        </Box>
        <Box p={3} display="flex" justifyContent="space-between">
          <Box display="flex" fontSize={30}>
            <Box mr={4}>
              <MotionBox
                onClick={handleLike}
                cursor="pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {liked ? (
                  <BsHeartFill style={{ color: "#ED4956" }} />
                ) : (
                  <BsHeart />
                )}
              </MotionBox>
            </Box>
            <MotionBox
              onClick={commentOpen}
              cursor="pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsChatSquare />
            </MotionBox>
          </Box>
          <Text size="sm" fontWeight="light">
            {moment(props.createdAt).fromNow()}
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

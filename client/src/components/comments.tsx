import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Spinner } from "@chakra-ui/spinner";
import moment from "moment";
import { useState, useEffect } from "react";
import {
  makeComment,
  getPostComments,
  deleteComment,
} from "../controllers/comment";
import { CommentSchema } from "../models/comment";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppSelector } from "../redux/ReduxStore";

export const CommentsModal = ({
  isOpen,
  onClose,
  postId,
}: {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
}) => {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [comments, setComments] = useState<
    (CommentSchema & {
      user: { username: string };
    })[]
  >([]);
  const { username } = useAppSelector((state) => state.auth);

  useEffect(() => {
    getPostComments(postId).then((res) => {
      res && setComments(res);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsButtonLoading(true);
    const res = await makeComment(postId, newComment);
    res && setComments([...comments, res]);
    setNewComment("");
    setIsButtonLoading(false);
  };

  const handleDelete = async (commentId: string) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
    await deleteComment(commentId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Total {comments?.length} Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading || !comments ? (
            <Spinner />
          ) : (
            <>
              {comments.length
                ? comments.map((comment) => (
                    <Box display="flex" key={comment.id} mb={4}>
                      <Avatar
                        src={`https://avatars.dicebear.com/api/micah/${comment.user.username}.svg`}
                        width="50px"
                        height="50px"
                        border="1px solid #DBDBDB"
                      />
                      <Box ml={3} w="100%">
                        <Box display="flex" justifyContent="space-between">
                          <Box>
                            <Text fontWeight="bold">
                              {comment.user.username}
                            </Text>
                            <Text size="sm" fontWeight="light" color="#aaa">
                              {moment(comment.createdAt).fromNow()}
                            </Text>
                          </Box>
                          {comment.user.username === username && (
                            <IconButton
                              variant="outline"
                              colorScheme="red"
                              aria-label="Delete Comment"
                              icon={<AiOutlineDelete />}
                              size="sm"
                              onClick={() => handleDelete(comment.id)}
                            />
                          )}
                        </Box>
                        <Text>{comment.content}</Text>
                      </Box>
                    </Box>
                  ))
                : "No Comments"}
              <Box display="flex" as="form" mb={3} onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={newComment}
                  mr={2}
                  onChange={(e) => setNewComment(e.target.value)}
                  isRequired
                  placeholder="Write a comment..."
                />
                <Button
                  disabled={isButtonLoading}
                  colorScheme="teal"
                  type="submit"
                  variant="solid"
                >
                  {isButtonLoading && <Spinner />} Comment
                </Button>
              </Box>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

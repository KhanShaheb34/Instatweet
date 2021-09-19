import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import { useAppSelector } from "../redux/ReduxStore";
import { createPost } from "../controllers/post";
import { ExtendedPostSchema } from "../models/post";
import { Spinner } from "@chakra-ui/spinner";

export const AddPost = ({
  onPost,
}: {
  onPost: (post: ExtendedPostSchema) => void;
}) => {
  const { username } = useAppSelector((state) => state.auth);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsButtonLoading(true);
    setContent("");
    const res = await createPost(content);
    res && onPost(res);
    setIsButtonLoading(false);
  };

  return (
    <Box
      as="form"
      my={3}
      background="white"
      border="1px solid #DBDBDB"
      p={3}
      rounded="md"
      display="flex"
    >
      <Avatar
        src={`https://avatars.dicebear.com/api/micah/${username}.svg`}
        width="60px"
        height="60px"
        border="1px solid #DBDBDB"
      />
      <Box
        display="flex"
        flexGrow={1}
        ml={3}
        flexDirection="column"
        alignItems="end"
      >
        <Textarea
          resize="none"
          fontSize="20px"
          height="100px"
          maxLength={100}
          shadow="none"
          outline="none"
          p={0}
          pt={1}
          border="none"
          rounded="none"
          _focus={{ shadow: "none", outline: "none" }}
          placeholder="What's happening?"
          _placeholder={{ fontSize: "25px" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Progress
          value={content.length}
          colorScheme="teal"
          width="100%"
          mb={3}
          height={1}
        />
        <Button
          disabled={content.length === 0 || isButtonLoading}
          variant="solid"
          colorScheme="teal"
          rounded="full"
          onClick={handleSubmit}
        >
          {isButtonLoading && <Spinner />} Instatweet
        </Button>
      </Box>
    </Box>
  );
};

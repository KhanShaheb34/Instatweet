import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import { useAppSelector } from "../redux/ReduxStore";

export const AddPost = () => {
  const { username } = useAppSelector((state) => state.auth);
  const [tweet, setTweet] = useState("");

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
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <Progress
          value={tweet.length}
          colorScheme="teal"
          width="100%"
          mb={3}
          height={1}
        />
        <Button
          disabled={tweet.length === 0}
          variant="solid"
          colorScheme="teal"
          rounded="full"
        >
          Instatweet
        </Button>
      </Box>
    </Box>
  );
};

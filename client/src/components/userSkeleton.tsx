import { Box } from "@chakra-ui/layout";
import { SkeletonCircle } from "@chakra-ui/skeleton";
import { SkeletonText } from "@chakra-ui/react";
import { PostSkeleton } from "./postSkeleton";

export const UserSkeleton = () => {
  return (
    <>
      <Box border="1px solid #DBDBDB" my={4} rounded="md" bg="white">
        <Box
          display="flex"
          m={4}
          alignItems="center"
          flexDirection={["column", "column", "row"]}
        >
          <SkeletonCircle size="100px" />
          <Box
            mt={[3, 3, 0]}
            ml={[0, 0, 3]}
            textAlign={["center", "center", "left"]}
          >
            <SkeletonText width="100px" />
          </Box>
        </Box>
      </Box>
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
};

import { Box } from "@chakra-ui/layout";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";

export const PostSkeleton = () => {
  return (
    <Box border="1px solid #DBDBDB" my={4} rounded="md" bg="white">
      <Box py={2} px={3} display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <SkeletonCircle size="40px" />
          <SkeletonText ml={3} noOfLines={1} width="100px" />
        </Box>
      </Box>

      <Skeleton height="250px" />
      <Skeleton height="50px" />
    </Box>
  );
};

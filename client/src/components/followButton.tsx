import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect, useState } from "react";
import { FiUserMinus, FiUserPlus } from "react-icons/fi";
import { checkFollower, followUser } from "../controllers/user";

export const FollowButton = ({ userId }: { userId: string }) => {
  const [following, setFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkFollower(userId).then((res) => {
      res && setFollowing(res.follow);
      setIsLoading(false);
    });
  }, [userId]);

  const handleFollow = async () => {
    setFollowing(!following);
    const res = await followUser(userId);
    res && setFollowing(res.message === "Followed");
  };

  return (
    <Button
      size="sm"
      colorScheme={following ? "red" : "teal"}
      variant="outline"
      onClick={handleFollow}
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner />
      ) : following ? (
        <>
          <FiUserMinus />
          <Text ml={2}>Unfollow</Text>
        </>
      ) : (
        <>
          <FiUserPlus />
          <Text ml={2}>Follow</Text>
        </>
      )}
    </Button>
  );
};

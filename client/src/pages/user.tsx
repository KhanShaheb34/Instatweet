import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { Layout } from "./layout";
import { ExtendedUserSchema } from "../models/user";
import { getSingleUser } from "../controllers/user";
import { useToast } from "@chakra-ui/toast";
import { Spinner } from "@chakra-ui/spinner";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Post } from "../components/post";
import { useAppSelector } from "../redux/ReduxStore";
import { AddPost } from "../components/addPost";
import { ExtendedPostSchema } from "../models/post";
import { EditProfileButton } from "../components/editProfile";
import { FollowButton } from "../components/followButton";

export const User = () => {
  const { username } = useParams<{ username: string }>();

  const { username: loggedUsername } = useAppSelector((state) => state.auth);

  const ownProfile = useMemo(
    () => username === loggedUsername,
    [loggedUsername, username]
  );

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<ExtendedUserSchema>();

  const toast = useToast();

  useEffect(() => {
    setIsLoading(true);
    getSingleUser(username).then((res) => {
      if (res) setUser(res);
      else
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 9000,
          isClosable: true,
        });

      setIsLoading(false);
    });
  }, [toast, username]);

  const onDelete = (id: string) => {
    user &&
      setUser({ ...user, posts: user?.posts.filter((post) => post.id !== id) });
  };

  const onPost = (post: ExtendedPostSchema) => {
    user && setUser({ ...user, posts: [post, ...user.posts] });
  };

  return (
    <Layout>
      {isLoading || !user ? (
        <Spinner />
      ) : (
        <>
          <Box border="1px solid #DBDBDB" my={4} rounded="md" bg="white">
            <Box
              display="flex"
              m={4}
              alignItems="center"
              flexDirection={["column", "column", "row"]}
            >
              <Avatar
                src={`https://avatars.dicebear.com/api/micah/${user.username}.svg`}
                width="100px"
                height="100px"
                border="1px solid #DBDBDB"
              />
              <Box
                mt={[3, 3, 0]}
                ml={[0, 0, 3]}
                textAlign={["center", "center", "left"]}
              >
                <Heading size="md" mb={2}>
                  {user.username}
                  {user.name && (
                    <Text display="inline" ml={1} fontSize="sm">
                      ({user.name})
                    </Text>
                  )}
                </Heading>
                {user.bio && (
                  <Heading size="sm" color="gray" mb={2} fontWeight="light">
                    {user.bio}
                  </Heading>
                )}
                {ownProfile ? (
                  <>
                    <EditProfileButton onUpdate={setUser} user={user} />
                    <Heading size="sm" mt={2} fontWeight="light">
                      You have {user.followers.length} followers
                    </Heading>
                  </>
                ) : (
                  <FollowButton userId={user.id} />
                )}
              </Box>
            </Box>
          </Box>
          {ownProfile && <AddPost onPost={onPost} />}
          {user.posts.map((post) => (
            <Post key={post.id} onDelete={onDelete} {...post} />
          ))}
        </>
      )}
    </Layout>
  );
};

import { Box, Text } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box
      w="100%"
      display="block"
      borderBottom="1px solid #DBDBDB"
      background="#fff"
      p={4}
    >
      <Container display="flex" justifyContent="space-between" maxW="xl">
        <Text>Instatweet</Text>
        <Text>Search</Text>
        <Text>@username</Text>
      </Container>
    </Box>
  );
};

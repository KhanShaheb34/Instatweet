import { ExtendedUserSchema } from "../models/user";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import { updateUser } from "../controllers/user";
import { Button } from "@chakra-ui/button";
import { FiEdit } from "react-icons/fi";
import { Text, Box } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { Spinner } from "@chakra-ui/spinner";

export const EditProfileButton = ({
  user,
  onUpdate,
}: {
  user: ExtendedUserSchema;
  onUpdate: (user: ExtendedUserSchema) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await updateUser(name, bio);
    res && onUpdate(res);
    setIsLoading(false);
    onClose();
  };

  return (
    <>
      <Button size="sm" variant="outline" onClick={onOpen} colorScheme="teal">
        <FiEdit />
        <Text ml={2}>Edit</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input
                value={username}
                mb={2}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                disabled
                placeholder="username"
              />
              <Input
                value={email}
                mb={2}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                disabled
                type="email"
                maxLength={75}
                placeholder="email"
              />
              <Input
                value={name}
                mb={2}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                placeholder="Name"
              />
              <Textarea
                resize="none"
                maxLength={100}
                placeholder="Bio"
                value={bio}
                mb={2}
                onChange={(e) => setBio(e.target.value)}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              disabled={isLoading}
              variant="outline"
              colorScheme="teal"
              onClick={handleSubmit}
            >
              {isLoading && <Spinner />} Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

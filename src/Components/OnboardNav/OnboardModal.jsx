import React, { useEffect } from "react";
import {
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { userImg } from "../../assets";

const OnboardModal = ({setIsNav, setShowModal}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 1000);
  }, []);

  return (
    <div>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box w="100%">
              <div className="flex my-4">
                <img
                  className=" mx-auto w-[60px] h-[60px]"
                  src={userImg}
                  alt="user img"
                />
              </div>
              <Text textAlign={"center"} fontWeight="700" fontSize={"16px"}>
                Hi Oluchi
              </Text>
              <Text textAlign={"center"} fontSize={"16px"}>
                Welcome to your Web3Ladies LMS dashboard.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </Text>
              <div className="flex gap-3 mx-auto w-[80%]">
                <Text
                  onClick={() => {
                    onClose()
                    setIsNav(true)
                    setShowModal(true)
                  }}
                  as="button"
                  className="w-[35%] text-[16px] ml-auto rounded-md text-white py-2 px-4 my-5 bg-primary border-2"
                >
                  Show tips
                </Text>
                <Text
                  onClick={onClose}
                  as="button"
                  className="w-[35%] text-[16px] mr-auto rounded-md text-primary py-2 px-4 my-5 border-2 border-primary"
                >
                  Skip
                </Text>
              </div>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OnboardModal;

import React from 'react'
import { Box, Text, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { tracksImage } from "../../assets";
import Input from "../../Common/Input/Input";

const TDetails = () => {
  return (
    <div>
      <Text className="text-[20px] font-bold mt-2 mb-5">Create Track</Text>

      {/* <form> */}
      <Box w={{ base: "100%", md: "500px", lg:"600px"}}>
        <Input
          label="Title"
          type="text"
          // value={regFormData.email}
          // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
          placeholder="Block Development"
        />
      </Box>

      <Text className="mt-5 mb-2 font-semibold">Upload banner</Text>
      <Flex w={{ base: "100%", md: "450px" }} gap={3}  mb="38px">
        <Box w="50%">
          <img src={tracksImage} alt="upload banner" />
        </Box>
        <Flex align={"center"}>
          <Text fontWeight={"semibold"}>
            <span className="underline">Upload</span> a photo
          </Text>
        </Flex>
      </Flex>
      <div className="flex">
        <Text
          // onClick={onClose}
          as="button"
          className="text-[16px] ml-auto rounded-md text-white py-2 px-4 mt-5 mb-2 bg-primary"
        >
          Create Track
        </Text>
      </div>
      {/* </form> */}
    </div>
  )
}

export default TDetails
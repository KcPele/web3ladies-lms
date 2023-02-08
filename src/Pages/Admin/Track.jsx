import React, { useState } from "react";
import { PageHoc } from "../../Components";
import CreateTask from "../../Components/Tracks/CreateTask";
import { tracksList } from "../../Data"
import { BsThreeDotsVertical, BsPlusLg } from "react-icons/bs"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import ModalWrapper from "../../Common/Modal/ModalWrapper";
import { Link } from "react-router-dom";


const Track = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <div
      className="flex flex-wrap gap-7"
    >
      {tracksList?.map((track) => (
        <Link key={track.id} to={`/tracks/${track.id}`}>
        <div
        className="relative  rounded-2xl overflow-hidden w-full mobile:w-[302px] p-4 bg-white"
        >
          <div className="relative">
            <img src={track.trackImage} className="rounded-lg object-contain" alt="" />
          </div>
          <p className="font-semibold text-[18px] mt-3 ">{track.track}</p>
          <div className=" w-fit ml-auto">
            <Menu bg="primary">
              <MenuButton as={Button} bg="white" >
                <BsThreeDotsVertical className="cursor-pointerml-auto text-[grey]" />

              </MenuButton>
              <MenuList >
                <MenuItem  
                  onClick={() => alert('Kagebunshin')}
                  _hover={{textColor: "red"}}
                >
                  Edit
                </MenuItem>
                <MenuItem  
                  onClick={() => alert('Kagebunshin')}
                  _hover={{textColor: "red"}}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
          </Link>
      ))}
      <div onClick={onOpen} className="cursor-pointer flex rounded-2xl overflow-hidden w-full mobile:w-[302px] p-4 bg-white">
        <div className=" m-auto ">
          <BsPlusLg className=" rounded-full mx-auto p-3 text-primary  bg-[#F8F2FF] text-[50px]"/>
          <p className="mt-2">Create track</p>
        </div>

        <ModalWrapper 
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <Box bg="white" w={{base:"80%", md:"400px"}}>
            <CreateTask onClose={onClose}/>
          </Box>
        </ModalWrapper>
      </div>
    </div>
  );
};

export default PageHoc(Track);

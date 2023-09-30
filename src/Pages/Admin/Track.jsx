import React, { useState, useEffect } from "react";
import { PageHoc } from "../../Components";
import CreateTask from "../../Components/Tracks/CreateTask";
import { tracksList } from "../../Data";
import { tracksImage } from "../../assets";
import axios from "axios";
import { BsThreeDotsVertical, BsPlusLg } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import ModalWrapper from "../../Common/Modal/ModalWrapper";
import { Link } from "react-router-dom";
import useGets from "../../hooks/useGets";
import { useAppStateContent, appUrl } from "../../context/AppStateContext";
import { getAllRequest } from "../../request/indext";
const Track = () => {
  const { token } = useAppStateContent();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tracksData, setTracksData] = useState({});

  useEffect(() => {
    const getTracks = async () => {
      let res = await getAllRequest("tracks", token);
      //check if the response is ok
      if (res.statusText === "OK") {
        console.log(res);
        setTracksData(res.data);
      }
    };
    getTracks();
  }, [token]);

  return (
    <div className="flex flex-wrap gap-7">
      {tracksData && (
        <>
          {tracksData?.docs?.map((track) => (
            <div key={track.id}>
              <div className="relative  rounded-2xl overflow-hidden w-full mobile:w-[302px] p-4 bg-white">
                <Link to={`/tracks/${track.id}`} className="relative">
                  <img
                    src={tracksImage}
                    className="rounded-lg object-contain"
                    alt=""
                  />
                </Link>
                <p className="font-semibold text-[18px] mt-3 ">{track.name}</p>
                <div className=" w-fit ml-auto">
                  <Menu bg="primary">
                    <MenuButton as={Button} bg="white">
                      <BsThreeDotsVertical className="cursor-pointerml-auto text-[grey]" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => alert("Kagebunshin")}
                        _hover={{ textColor: "red" }}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => alert("Kagebunshin")}
                        _hover={{ textColor: "red" }}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      <div
        onClick={onOpen}
        className="cursor-pointer flex rounded-2xl overflow-hidden w-full mobile:w-[302px] p-4 bg-white"
      >
        <div className=" m-auto ">
          <BsPlusLg className=" rounded-full mx-auto p-3 text-primary  bg-[#F8F2FF] text-[50px]" />
          <p className="mt-2">Create track</p>
        </div>

        <ModalWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <Box bg="white" w={{ base: "80%", md: "400px" }}>
            <CreateTask onClose={onClose} />
          </Box>
        </ModalWrapper>
      </div>
    </div>
  );
};

export default PageHoc(Track);

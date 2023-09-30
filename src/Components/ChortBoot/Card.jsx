import React from "react";
import { BsThreeDotsVertical, BsPlusLg } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ModalWrapper from "../../Common/Modal/ModalWrapper";
import { CancelBtn } from "../../assets";
import CreateCohort from "./CreateCohort";

const Card = ({ modulesData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-6 ">
        {modulesData?.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl shadow-lg overflow-hidden w-full mobile:w-[302px] p-4 bg-white"
          >
            <Link to={`/cohort-bootcamp/${item.id}`} className="">
              <div className="relative ">
                <p className="bg-[#F9F9F9] text-[#EEEEEE] text-[120px] text-center font-extrabold  ">
                  1
                </p>
              </div>
              <div className="">
                <p className="text-black font-semibold text-xl mt-2">
                  {item?.name}
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 text-[#858585] text-[14px]">
                  <p className="my-auto">{item?.theme}</p>
                </div>
                <Menu>
                  <MenuButton
                    as={Button}
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                  >
                    <BsThreeDotsVertical className="cursor-pointer text-[grey]" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => alert("Kagebunshin")}
                      fontWeight="semi-bold"
                      _hover={{ color: "red" }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={() => alert("Kagebunshin")}
                      fontWeight="semi-bold"
                      _hover={{ color: "red" }}
                    >
                      Edit Cohort
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </Link>
          </div>
        ))}
        <div
          onClick={onOpen}
          className="cursor-pointer shadow-lg h-[280px] my-auto flex rounded-2xl overflow-hidden w-full mobile:w-[302px] p-4 bg-white"
        >
          <div className=" m-auto ">
            <BsPlusLg className=" rounded-full mx-auto p-3 text-primary  bg-[#F8F2FF] text-[50px]" />
            <p className="mt-2">Create track</p>
          </div>
        </div>
        <ModalWrapper
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          size="lg"
        >
          <img
            onClick={onClose}
            className="w-fit h-fit ml-auto mt-4"
            src={CancelBtn}
            alt="cancle"
          />
          <p className="font-bold text-[20px] mb-4">Create Cohort</p>

          <CreateCohort onClose={onClose} />
        </ModalWrapper>
      </div>
    </>
  );
};

export default Card;

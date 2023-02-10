import React from "react";
import { BsThreeDotsVertical, BsPlusLg } from "react-icons/bs"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DesignModule = ({ modulesData }) => {
  return (
    <>
    <Link to="/new/module" className="flex gap-2 mb-7 w-fit ml-auto hover:border-b-2 border-primary">
    <BsPlusLg className=" my-auto text-primary text-[16px]"/>
    <p className="font-semibold text-primary">Create assignment</p>
    </Link>
    <div className="flex flex-wrap gap-6 ">
      {modulesData?.map((item) => (
        <div key={item.id} className="relative rounded-2xl shadow-lg overflow-hidden w-full mobile:w-[302px] p-4 bg-white">
          <div  className="relative ">
           
            <p className="bg-[#F9F9F9] text-[#EEEEEE] text-[120px] text-center font-extrabold  ">{item.id}</p>
          </div>
          <div className="">
            <p className="text-black font-semibold text-xl mt-2">{item.title}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-[#858585] text-[14px]">
              <p className="my-auto">{item.theme}</p>
            </div>
            <Menu  >
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
                  Duplicate Module
                </MenuItem>
                <MenuItem
                  onClick={() => alert("Kagebunshin")}
                  fontWeight="semi-bold"
                  _hover={{ color: "red" }}
                >
                  Delete Module
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        // </Link>
      ))}
    </div>
    </>
  );
};

export default DesignModule;

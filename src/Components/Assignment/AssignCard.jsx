import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const AssignCard = ({ item }) => {
  return (
    <div>
         <div className="relative rounded-2xl shadow-lg overflow-hidden w-full mobile:w-[302px] p-4 bg-white">
          <Link to={`/assignments/${item.id}`}  className="relative cursor-pointer">
            <img
              src={item.trackImage}
              className="rounded-lg object-contain"
              alt=""
            />
            <div className="px-[13px] py-[4px] absolute rounded-[23px] right-3 top-3 bg-[#FAFAFACC]">
              <p
                className={`font-semibold rounded-md  ${
                  item.status === "PUBLISHED"
                    ? " text-primary"
                    : "text-[#858585]"
                }`}
              >
                {item.status}
              </p>
            </div>
          </Link>
          <Link to={`/assignments/${item.id}`} className="mt-4 cursor-pointer">
            <p className="text-black font-semibold text-xl mt-2">{item.title}</p>
          </Link>
          <div className="flex justify-between mt-5">
            <div className="flex gap-2 text-[#858585] text-[14px]">
              <p className="text-black my-auto bg-primary w-[6px] h-[6px] rounded-full" />
              <p className="my-auto">{item.number} submissions</p>
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
                  Duplicate assignment
                </MenuItem>
                <MenuItem
                  onClick={() => alert("Kagebunshin")}
                  fontWeight="semi-bold"
                  _hover={{ color: "red" }}
                >
                  Delete assignment
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
    </div>
  )
}

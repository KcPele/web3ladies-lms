import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSettings2Line } from "react-icons/ri";
import { useState } from "react";
import { profileimage } from "../assets";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { logo } from "../assets";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "You have a new assignment." },
    { id: 2, text: "You have a new assignment." },
    { id: 3, text: "You have a new assignment." },
  ]);

  return (
    <nav className="bg-white py-2 lg:py-10 border-b-[1px] border-[rgba(0, 0, 0, 0.2)] px-2 lg:px-10 flex gap-6 items-center justify-between lg:justify-end h-16">
      <>
        <div className="lg:hidden flex gap-2 items-center">
          <RxHamburgerMenu ref={btnRef} className="w-8 h-8" onClick={onOpen} />
          <div className="w-[5rem]">
            <img src={logo} className="" alt="Logo" />
          </div>
        </div>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <br />
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
      <div className="relative ml-auto lg:ml-0 cursor-pointer w-5 ">
        <IoMdNotificationsOutline
          size={24}
          className=" text-lg mr-4 text-gray-800"
          onClick={() => setShowNotifications(!showNotifications)}
        />
        <span className=" absolute top-1 right-0 bg-red-500 rounded-full h-2 w-2"></span>
        {showNotifications && (
          <div className="absolute w-[287px]  md:w-[487px] -right-50 md:-right-40 lg:right-0 mt-2 py-[19px] px-[22px] bg-white rounded-md shadow-md">
            <div className="overflow-y-auto scrollbar-hide max-h-64">
              <h3 className="text-base font-bold">Notification</h3>
              <div className="mt-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="py-[10px] flex items-center gap-2"
                  >
                    <div className="w-[6px] bg-[#7D0BFE] rounded-full h-[6px]"></div>
                    <p>{notification.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold">Announcements</h3>
                <div className="mt-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="py-[10px] flex items-center gap-2"
                    >
                      <div className="w-[6px] bg-[#7D0BFE] rounded-full h-[6px]"></div>
                      <p>{notification.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:block">
        <button className="text-[#3EB876] rounded border-[1px] border-[#afdbc5] px-5 py-[10px] bg-[#ECF8F2] ">
          Safe
        </button>
      </div>
      <div className=" flex gap-0 lg:gap-5 items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10  object-contain rounded-full"
            src={profileimage}
            alt="profile"
          />
          <div className="hidden lg:flex flex-col">
            <span className="font-bold">Oluchi Enebeli</span>

            <span className="text-xs text-[#767278]">Mentee</span>
          </div>
        </div>

        <button
          className=" ml-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaCaretDown className="text-lg text-gray-800" />
        </button>
        {showDropdown && (
          <div className="absolute right-5 top-10 mt-2 bg-white rounded-lg py-2">
            <Link to="#" className="block px-4 py-2 text-gray-800">
              Profile
            </Link>
            <Link
              to="/settings"
              className="flex px-4 py-2 text-gray-800 hover:bg-blue-gray-50"
            >
              <RiSettings2Line
                size={24}
                className=" text-lg mr-2 text-gray-800"
              />
              Settings
            </Link>
            <Link to="#" className="block px-4 py-2 text-gray-800">
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { BsSlack, BsPlayBtn, BsStar } from "react-icons/bs";
import { BiRocket, BiUser } from "react-icons/bi";
import {
  MdOutlineDashboard,
  MdWindow,
  MdOutlineAssignment,
} from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { useState } from "react";
import { logo } from "../assets";
import {
  IoMdArrowDropdown,
  IoMdNotificationsOutline,
  IoMdArrowDropup,
} from "react-icons/io";
import { GiSpiderWeb } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppStateContent } from "../context/AppStateContext";
import NavigateButton from "./sidebar/NavigateButton";

const Sidebar = () => {
  const { active, setActive, isAdmin } = useAppStateContent();
  const [userModal, setUserModal] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <aside className=" px-4 border-r-[1px] bg-white min-h-screen border-[rgba(0, 0, 0, 0.2)] p-2">
      <div className="text-[#858585] mb-16 text-center py-2">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        {isAdmin ? (
          <ul>
            <NavigateButton
              url="/dashboard"
              text="Dashboard"
              icon={<MdOutlineDashboard size={24} className="mr-2" />}
            />

            <NavigateButton
              url="/cohort-bootcamp"
              text="Cohort & Bootcamp"
              icon={<GiSpiderWeb size={24} className="mr-2" />}
            />
            <li
              className={`flex items-center rounded cursor-pointer py-[17px] px-4 ${
                active === "Users"
                  ? "bg-[#F8F2FF] text-[#7D0BFE]"
                  : "text-[#858585]"
              }`}
              onClick={() => {
                setActive("Users");
                setUserModal(!userModal);

                // navigate("/classroom");
              }}
            >
              <BiUser size={24} className="mr-2" />

              <span className="hidden lg:block">Users</span>
              <button className="ml-auto">
                {userModal ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </button>
            </li>
            {userModal && (
              <li className="flex flex-col items-center rounded cursor-pointer py-[12px]">
                <Link to="/mentees" className={`flex py-2 items-center`}>
                  <BsDot size={20} />
                  Mentees
                </Link>
                <Link to="/mentors" className="flex">
                  <BsDot />
                  Mentors
                </Link>
              </li>
            )}

            <NavigateButton
              url="/tracks"
              text="Tracks"
              icon={<BiRocket size={24} className="mr-2" />}
            />
            <NavigateButton
              url="/modules"
              text="Modules"
              icon={<MdWindow size={24} className="mr-2" />}
            />
            <NavigateButton
              url="/assignments"
              text="Assignments"
              icon={<MdOutlineAssignment size={24} className="mr-2" />}
            />
            <NavigateButton
              url="/groups"
              text="Groups"
              icon={<RxDragHandleDots2 size={24} className="mr-2" />}
            />
            <NavigateButton
              url="/notification"
              text="Notification"
              icon={<IoMdNotificationsOutline size={24} className="mr-2" />}
            />
          </ul>
        ) : (
          <ul className="flex flex-col border-b-[1px] border-[rgba(0, 0, 0, 0.2)]">
            <NavigateButton
              url="/dashboard"
              text="Dashboard"
              icon={<MdOutlineDashboard size={24} className="mr-2" />}
            />
            <NavigateButton
              url="/projects"
              text="Projects"
              icon={<BiRocket size={24} className="mr-2" />}
            />

            <NavigateButton
              url="/grades"
              text="Grades"
              icon={<BsStar size={24} className="mr-2" />}
            />

            <li
              className={` mb-4 flex items-center rounded cursor-pointer py-[17px] px-4 ${
                location.pathname === "/classroom"
                  ? "bg-[#F8F2FF] text-[#7D0BFE]"
                  : "text-[#858585]"
              }`}
              // onClick={() => {
              //   setActive("Classroom");
              //   navigate("/classroom");
              // }}
            >
              <BsPlayBtn size={24} className="mr-2" />{" "}
              <span className="hidden lg:block">Classroom</span>
              <button className="ml-auto">
                <IoMdArrowDropdown />
              </button>
            </li>
          </ul>
        )}

        <ul className="flex mt-4 flex-col">
          <li
            className={` py-[17px] flex items-center rounded cursor-pointer px-4 text-[#7D0BFE]`}
            onClick={() => {}}
          >
            <BsSlack size={24} className="mr-2" />{" "}
            <span className="hidden lg:block">Go to slack</span>
          </li>
          <li
            className={`text-[#858585] flex items-center rounded cursor-pointer py-[17px] px-4 `}
            onClick={() => {}}
          >
            <HiOutlineLogout size={24} className="mr-2" />{" "}
            <span className="hidden lg:block">Logout</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

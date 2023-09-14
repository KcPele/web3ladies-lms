import React, { useState } from "react";
import {
  Announcements,
  AssignmentCard,
  MenteesTable,
  PageHoc,
  RecentRecording,
  TotalPointCard,
  TracksCard,
} from "../Components";
import { IoMdClose } from "react-icons/io";
import { tracksImage } from "../assets";
import { useAppStateContent } from "../context/AppStateContext";
import { BsPlusLg } from "react-icons/bs";
import { useInfiniteQuery } from "react-query";
import { menteesData } from "../Data";
import OnboardModal from "../Components/OnboardNav/OnboardModal";
import OnboardNav from "../Components/OnboardNav/OnboardNav";
import AssignDash from "../Components/AssignDash";
import axios from "axios";

const tracksData = [
  {
    id: 1,
    trackImage: tracksImage,
    track: "Product Management",
    cohort: "III",
    progress: "60%",
    status: "Incomplete",
  },
  {
    id: 2,
    trackImage: tracksImage,
    track: "Product Management",
    cohort: "II",
    progress: "100%",
    status: "Completed",
  },
  {
    id: 3,
    trackImage: tracksImage,
    track: "Web Development",
    cohort: "I",
    progress: "24%",
    status: "Evited",
  },
];

const assignmentData = [
  {
    id: 1,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "New",
    url: "#",
    hasSubmitted: false,
  },
  {
    id: 2,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "New",
    url: "#",
    hasSubmitted: false,
  },
  {
    id: 3,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Pending",
    url: "#",
    hasSubmitted: false,
  },
  {
    id: 4,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Completed",
    url: "#",
    hasSubmitted: true,
  },
  {
    id: 5,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Completed",
    url: "#",
    hasSubmitted: true,
  },
  {
    id: 6,
    title:
      "Write a detailed PRD for the product you reseached in the last assignment",
    status: "Completed",
    url: "#",
    hasSubmitted: true,
  },
];

const Dashboard = () => {
  const [active, setActive] = useState("all");
  const { isAdmin, isMentor } = useAppStateContent();
  const [isNav, setIsNav] = useState(false);
  const [assignment, setAssignment] = useState(assignmentData);
  const [showModal, setShowModal] = useState(false);

  // const fetchtTracks = ({}) =>
  //   axios.get(appUrl + "/tracts?", {
  //     head,
  //   });

  return (
    <div className="w-full ">
      {!isNav ? (
        <OnboardModal setIsNav={setIsNav} setShowModal={setShowModal} />
      ) : (
        <div className="fixed overflow-hidden ">
          <OnboardNav showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}

      <h1 className="text-2xl mb-6 font-bold">Dashboard</h1>
      {!isAdmin && (
        <div className=" w-full text-white bg-[#1A1A1A] px-[26px] py-2 sm:py-5 rounded-[8px] flex flex-col md:flex-row justify-between gap-2 md:items-center">
          <div className="">
            <p>Welcome to Week 3!</p>
            <p className="break-all">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex justify-between items-center gap-6">
            <button className="rounded px-4 py-2 lg:px-8 lg:py-[14px] border-2 border-white">
              Go to class
            </button>
            <IoMdClose className="text-[#858585] cursor-pointer" />
          </div>
        </div>
      )}
      <div className="mt-[30px] flex gap-12 flex-wrap">
        <TotalPointCard point="1200" />
        <TotalPointCard point="1200" />
        <TotalPointCard point="1200" />
        <TotalPointCard point="1200" />
      </div>
      <div className="mt-12 flex w-fill gap-[27px]">
        <div className="w-full">
          {isMentor && !isAdmin ? (
            <div className="w-full">
              <h3 className="font-bold text-5">Mentees</h3>
              <MenteesTable menteesTableData={menteesData.splice(0, 9)} />
            </div>
          ) : (
            <div className="">
              <h3 className="font-bold text-5">Tracks</h3>
              <div className="flex gap-5 flex-wrap">
                {tracksData.map((val) => (
                  <TracksCard
                    trackImage={val.trackImage}
                    track={val.track}
                    cohort={val.cohort}
                    progress={val.progress}
                    status={val.status}
                  />
                ))}
                {isAdmin && !isMentor && (
                  <div className="w-[302px] cursor-pointer gap-[21px] bg-white h-[314px] flex justify-center items-center flex-col ">
                    <div className="rounded-full w-16 h-16 bg-[#FBF5FE]   flex justify-center items-center flex-col">
                      <BsPlusLg size={30} className="   text-[#7D0BFE] " />
                    </div>
                    <p className="text-[#858585] text-sm">Add new track</p>
                  </div>
                )}
              </div>
            </div>
          )}
          {!isAdmin && !isMentor && (
            <div className="mt-[52px] w-full">
              <h3 className="font-bold text-5">Assignments</h3>
              <div className="flex w-full bg-white mb-[2px] gap-5 py-4 px-6">
                <button
                  className={`${
                    active === "all"
                      ? "bg-[#7D0BFE] text-white"
                      : "text-[#AAA3B1]"
                  } py-[7px] px-6  rounded-[50px] `}
                  onClick={() => {
                    setActive("all");
                    setAssignment(assignmentData);
                  }}
                >
                  All
                </button>
                <button
                  className={`${
                    active === "new"
                      ? "bg-[#7D0BFE] text-white"
                      : "text-[#AAA3B1]"
                  } py-[7px] px-6  rounded-[50px] `}
                  onClick={() => {
                    setActive("new");
                    setAssignment(
                      assignmentData.filter((data) => data.status === "New")
                    );
                  }}
                >
                  New
                </button>
                <button
                  className={`${
                    active === "pending"
                      ? "bg-[#7D0BFE] text-white"
                      : "text-[#AAA3B1]"
                  } py-[7px] px-6  rounded-[50px] `}
                  onClick={() => {
                    setActive("pending");
                    setAssignment(
                      assignmentData.filter((data) => data.status === "Pending")
                    );
                  }}
                >
                  Pending
                </button>
                <button
                  className={`${
                    active === "completed"
                      ? "bg-[#7D0BFE] text-white"
                      : "text-[#AAA3B1]"
                  } py-[7px] px-6  rounded-[50px] `}
                  onClick={() => {
                    setActive("completed");
                    setAssignment(
                      assignmentData.filter(
                        (data) => data.status === "Completed"
                      )
                    );
                  }}
                >
                  Completed
                </button>
              </div>
              <div className="flex w-full gap-[1px] flex-col">
                {assignment.map((val) => (
                  <AssignmentCard
                    title={val.title}
                    status={val.status}
                    url={val.url}
                    hasSubmitted={val.hasSubmitted}
                  />
                ))}
              </div>
              {/* <AssignDash assignment={assignment}/> */}
            </div>
          )}
        </div>
        <div className="hidden xl:flex">
          {isAdmin || isMentor ? <Announcements /> : <RecentRecording />}
        </div>
      </div>
    </div>
  );
};

export default PageHoc(Dashboard);

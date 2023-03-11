import React from "react";
import { assignmentList } from "./../Data";
import { Link } from "react-router-dom";
import { useAppStateContent } from "../context/AppStateContext";
const Announcements = () => {
  const { isMentor } = useAppStateContent();
  return (
    <div className="w-[353px] min-h-screen ">
      <div className="flex justify-between ">
        {isMentor ? (
          <h3 className="font-bold text-[20px]">Resent Submissions</h3>
        ) : (
          <h3 className="font-bold text-[20px]">Announcements</h3>
        )}

        <Link to="">
          <div   className="flex flex-col items-center justify-center">
            <p   className="text-sm text-gray-700 ">See all</p>
            <div   className="w-12 h-[3px] bg-gray-300 "></div>
          </div>
        </Link>
      </div>
      <div className="mt-6 bg-white p-6 flex flex-col gap-7 items-center min-h-screen">
        {assignmentList.map((item) => (
          <div
            key={item.id}
            onClick={() => {}}
            className="w-[95%] cursor-pointer p-5 mobile:w-[260px] tablet:w-[280px]"
          >
            <div className="mx-auto bg-[#F9F9F9]">
              <img
                className="w-fit mx-auto py-5 rounded-sm"
                src={item.image}
                alt="pdf"
              />
            </div>
            <p className="font-semibold leading-4 my-3">
              Oluchi Enebeli - My Assignment
            </p>
            <p className="text-grey text-[12px]">Submitted 4 hours ago</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;

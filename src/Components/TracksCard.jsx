import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStateContent } from "../context/AppStateContext";

const TracksCard = ({
  trackImage,
  cohort,
  track,
  status,
  progress,
  id,
  mentees,
  isEvicted,
}) => {
  const navigate = useNavigate();
  const { isAdmin } = useAppStateContent();
  return (
    <div
      onClick={() => {
        navigate(`/cohort/${id}`);
      }}
      className="relative cursor-pointer rounded-2xl overflow-hidden w-full tablet:w-[302px] p-4 bg-white"
    >
      {!isAdmin && status === "Evited" && (
        <div className="bg-[#FFFFFF] z-50 absolute inset-0 opacity-50"></div>
      )}
      <div className="relative">
        <img
          src={trackImage}
          className="rounded-lg object-contain w-full"
          alt=""
        />
        <div className="px-[13px] py-[4px] absolute rounded-[23px] right-3 top-3 bg-[#FAFAFACC]">
          <p className="text-[#7D0BFE] text[11px] font-bold">COHORT {cohort}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className=" font-bold text-[9px] text-[#7D0BFE]">TRACK</p>
        <p className="text-black text-xl ">{track}</p>
      </div>
      {!isAdmin && (
        <>
          <div className="mt-4 flex items-center gap-[14px]">
            <p className="text-[#858585] text-[9px]">STATUS</p>
            <p
              className={` rounded text-white px-[6px] py-1  ${
                status === "Completed" ? "bg-[#7D0BFE]" : "bg-[#FF5F2D]"
              } text-[10px]`}
            >
              {status}
            </p>
          </div>
          <div className="mt-[13px]">
            <div className="flex justify-between items-center">
              <p className="text-[#858585] text-[9px]">PROGRESS</p>
              <p className="text-[#7D0BFE] font-bold">{progress}</p>
            </div>
            <div className="w-full bg-gray-200 h-1">
              <div
                className="bg-[#7D0BFE] h-1"
                style={{ width: progress }}
              ></div>
            </div>
          </div>
        </>
      )}
      <div className="mt-6">
        <p className="text-[#858585] text-[9px]">
          <span className="text-black">250 mentees </span>
          enrolled for this track
        </p>
      </div>
    </div>
  );
};

export default TracksCard;

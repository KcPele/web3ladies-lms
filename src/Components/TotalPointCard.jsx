import React from "react";

const TotalPointCard = ({ point }) => {
  return (
    <div className="bg-[#7D0BFE] px-6 py-[23px] w-full mobile_l:w-[45%] laptop:w-[16rem] h-[139px] rounded-lg">
      <p className="text-[#E7D3FC]">Total points</p>
      <p className="mt-4 text-white text-4xl font-bold">{point}</p>
    </div>
  );
};

export default TotalPointCard;

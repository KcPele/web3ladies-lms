import React from "react";

const BtnIcon = ({ text, icon }) => {
  return (
    <button className="border-2 text-[20px] rounded-lg p-3 w-full my-3 border-[black]">
        <div className="flex item-center gap-3 justify-center">
            <img src={icon} alt="icon" />
            {text}
        </div>
    </button>
  );
};

export default BtnIcon;

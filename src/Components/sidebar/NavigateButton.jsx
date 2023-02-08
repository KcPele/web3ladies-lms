import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppStateContent } from "../../context/AppStateContext";

const NavigateButton = ({ url, icon, text }) => {
  const { active, setActive } = useAppStateContent();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <li
      className={` flex items-center rounded cursor-pointer py-[17px] px-4 ${
        active === text ? "bg-[#F8F2FF] text-[#7D0BFE]" : "text-[#858585]"
      }`}
      onClick={() => {
        setActive(text);
        navigate(url);
      }}
    >
      {icon}
      <span className="hidden lg:block"> {text}</span>
    </li>
  );
};

export default NavigateButton;

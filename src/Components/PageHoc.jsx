import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const PageHoc = (WrappedComponent) => {
  return function (props) {
    return (
      <div className="flex bg-[#fafafa]">
        <div className="w-0 lg:w-[13rem] hidden lg:block">
          <Sidebar />         
          
        </div>
        <div className="w-full">
          <Navbar />
          <div className="px-3 lg:px-10 pt-5 lg:pt-10 pb-[140px] ">
            <WrappedComponent {...props} />
          </div>
        </div>
      </div>
    );
  };
};

export default PageHoc;

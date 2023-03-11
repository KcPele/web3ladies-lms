import React from "react";
import { GradesTable, PageHoc } from "../../Components";


const Grades = () => {
  return( 
    <div>
      <div className=" tablet:px- py-16">
        <p className="text-[24px] font-[700]">Grades</p>
        <div className="mt-8 w-[65vw] laptop:w-[75vw] overflow-x-scroll">
          <GradesTable />
        </div>
      </div>
    </div>);
};

export default PageHoc(Grades);

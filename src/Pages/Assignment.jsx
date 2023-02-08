import React from "react";
import { PageHoc } from "../Components";
import Curriculum from "../Components/Curriculum/Curriculum";

const Assignment = () => {
  return <div><Curriculum/></div>;
};

export default PageHoc(Assignment);

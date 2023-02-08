import React from "react";
import { rightArrow, leftArrow } from "../../assets";
import { Button } from "@chakra-ui/react";

const TrackPaignation = ({
  loading,
  currentPage,
  postsPerPage,
  totalPosts,
  paginate,
  paginateFront,
  paginateBack,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2 flex w-fit ml-auto mt-20">
      <p className="relative inline-flex items-center  border-grey px-2 py-2 font-[500]">Page</p>

      <span className={ "px-4 py-2 bg-[#EDEDED] rounded-md border-1  text-black font-[500] border-[black]"}>
        {currentPage}
      </span>
      <span className={ "pl-2 pr-4 py-2 rounded-md border-1  text-black font-[500] border-[black]"}>
        of {" "}{pageNumbers.length}
      </span>
      <Button
        onClick={() => {
          paginateBack();
        }}
        roundedBottomRight="none"
        roundedTopRight="none"
        href="!#"
        className="relative inline-flex items-center border-grey border-2 pl-1 pr-2 py-2 hover:bg-[#EDEDED]"
        isDisabled={currentPage === 1}
        colorScheme="teal"
        variant="link"
      >
        <img className="" src={leftArrow} alt="a" />
      </Button>

      <Button
        onClick={() => {
          paginateFront();
        }}
        roundedTopLeft="none"
        roundedBottomLeft="none"
        href="!#"
        className="relative  inline-flex items-center border-grey border-2 pl-2 pr-1 py-2 hover:bg-[#EDEDED]"
        isDisabled={currentPage === pageNumbers.length}
        colorScheme="teal"
        variant="link"
      >
        <img className="ml-2" src={rightArrow} alt="a" />
      </Button>
    </div>
  );
};

export default TrackPaignation;

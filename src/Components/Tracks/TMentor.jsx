import React, { useState } from "react";
import {
  Box,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import MentorList from "./MentorList";
import TrackPaignation from "./TrackPagination";
import {  mentorList } from "../../Data";

const TMentor = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const list = mentorList

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <Box>
      <Flex
        w="fit-content"
        ml="auto"
        my={3}
      >
        <InputGroup>
          <Input placeholder="Search" outline={2} outlineColor="primary" border="2px solid grey" />
          <InputRightElement children={<AiOutlineSearch  />} />
        </InputGroup>
      </Flex>
      <Box>
        <MentorList currentPosts={currentPosts} loading={loading} />
        <TrackPaignation
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={list.length}
          paginate={paginate}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
        />
      </Box>
    </Box>
  );
};

export default TMentor;

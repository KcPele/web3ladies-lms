import React, { useEffect, useState } from "react";
import { PageHoc } from "../Components";
import {
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Progress,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
const menteesData = [
  {
    id: 1,
    name: "Oluchi1 Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 2,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli2",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 36,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 166,
    name: "Oluchi Enebeli",
    track: "Product Design 45",
    progress: 60,
    grade: "A",
  },
  {
    id: 6662,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 63,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 30,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 23,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli23",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
  {
    id: 3,
    name: "Oluchi Enebeli",
    track: "Product Design",
    progress: 60,
    grade: "A",
  },
];
const Mentees = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [displayedData, setDisplayData] = useState([]);

  const handleIncrementCurrent = () => {
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    setDisplayData(menteesData.slice(startIndex, endIndex));
    console.log(displayedData);
  };

  const totalPages = Math.ceil(menteesData.length / itemsPerPage);

  useEffect(() => {
    handleIncrementCurrent();
  }, [menteesData, currentPage]);

  return (
    <div className="max-w-[1139px]">
      <h3 className="text-2xl font-bold">Mentees</h3>
      <div className="mt-8 flex justify-end">
        <InputGroup className="max-w-[274px] bg-white">
          <Input placeholder="Search" />
          <InputRightElement children={<CiSearch color="green.500" />} />
        </InputGroup>
      </div>
      <div className="mt-5">
        <TableContainer className="bg-white" color="#AAA3B1">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="AAA3B1">Name</Th>
                <Th color="AAA3B1">Track</Th>
                <Th color="AAA3B1">Progress</Th>
                <Th color="AAA3B1">grade</Th>
                <Th color="AAA3B1"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {displayedData.map((data) => (
                <Tr key={data.id}>
                  <Td>{data.name}</Td>
                  <Td>{data.track}</Td>
                  <Td>
                    <Progress
                      value={data.progress}
                      size="xs"
                      colorScheme="purple"
                    />
                  </Td>
                  <Td>{data.grade}</Td>
                  <Td className="group relative">
                    {" "}
                    <BsThreeDots size={24} className="" />
                    <div className="absolute hidden group-hover:flex  rounded right-10 bottom-10 px-4 drop-shadow py-[15px] bg-white  ">
                      <button className="text-[#FF2F2F]">Remove mentee</button>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className="w-full mt-[23px] flex justify-end">
        <div className="w-[240px] flex items-center justify-end gap-2 ">
          <p>Page</p>
          <p className="bg-[#EDEDED] rounded px-2">{currentPage}</p>
          <p>of</p>
          <p
            className={`${
              currentPage === totalPages && "bg-[#EDEDED] rounded px-2"
            }`}
          >
            {totalPages}
          </p>
          <div className="bg-white flex gap-2">
            <MdOutlineKeyboardArrowLeft
              className="cursor-pointer"
              onClick={() => {
                if (currentPage !== 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              size={24}
            />

            <MdKeyboardArrowRight
              onClick={() => {
                if (currentPage !== totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className="cursor-pointer"
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHoc(Mentees);

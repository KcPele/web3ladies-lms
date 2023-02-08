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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Select,
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
const Mentors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [displayedData, setDisplayData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    assignedTrack: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const isError = input === "";

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

  const handeleFormSubmit = () => {
    console.log(input);
    setIsSuccess(true);
  };

  return (
    <div className="max-w-[1139px]">
      <h3 className="text-2xl font-bold">Mentors</h3>
      <div className="mt-8 flex justify-between">
        <button
          onClick={onOpen}
          className="flex justify-center text-[#7D0BFE] items-center"
        >
          {" "}
          <span className="text-3xl mr-1">+</span>Add member
        </button>

        <Modal
          size={isSuccess ? "sm" : "xl"}
          isOpen={isOpen}
          isCentered={true}
          onClose={() => {
            onClose();
            setIsSuccess(false);
          }}
        >
          <ModalOverlay />
          <ModalContent>
            {!isSuccess && <ModalCloseButton />}
            <ModalBody>
              {isSuccess ? (
                <div className="flex py-8 justify-center items-center flex-col gap-8">
                  <p className="font-bold text-center ">
                    Account created for <br />
                    oluchienebeli@gmail.com
                  </p>
                  <p className="text-center text-[#858585]">
                    An email will be sent to them to complete the registration.
                  </p>
                  <button
                    className=" bg-[#7D0BFE] text-white px-[63px] py-[15px] rounded "
                    onClick={() => {
                      onClose();
                      setIsSuccess(false);
                    }}
                  >
                    Okay
                  </button>
                </div>
              ) : (
                <div className="mt-[28px] mx-[20px]">
                  <h4 className="font-bold text-[20px]">Add member</h4>
                  <div className="mt-5">
                    <FormControl isInvalid={isError}>
                      <div className="mb-3">
                        <FormLabel>First name</FormLabel>
                        <Input
                          type="text"
                          name="firstName"
                          value={input.firstName}
                          onChange={handleInputChange}
                        />
                        {isError.firstName && (
                          <FormErrorMessage>
                            First name is required.
                          </FormErrorMessage>
                        )}
                      </div>
                      <div className="mb-3">
                        <FormLabel>Last name</FormLabel>
                        <Input
                          type="text"
                          name="lastName"
                          value={input.lastName}
                          onChange={handleInputChange}
                        />
                        {isError.email && (
                          <FormErrorMessage>
                            Last name is required.
                          </FormErrorMessage>
                        )}
                      </div>
                      <div className="mb-3">
                        <FormLabel>Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={input.email}
                          onChange={handleInputChange}
                        />
                        {isError.email && (
                          <FormErrorMessage>
                            Email is required.
                          </FormErrorMessage>
                        )}
                      </div>
                      <div>
                        <FormLabel>Assign Track</FormLabel>
                        <Select
                          name="assignedTrack"
                          value={input.assignedTrack}
                          onChange={handleInputChange}
                          placeholder="Select track"
                        >
                          <option value="blockchain-development">
                            Blockchain development
                          </option>
                          <option value="web-development">
                            Web development
                          </option>
                        </Select>
                      </div>
                    </FormControl>
                  </div>
                </div>
              )}
            </ModalBody>
            {!isSuccess && (
              <ModalFooter>
                <button
                  onClick={handeleFormSubmit}
                  className="bg-[#7D0BFE] px-8 text-white py-[14px]"
                >
                  Create account
                </button>
              </ModalFooter>
            )}
          </ModalContent>
        </Modal>

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
                  <Td className=""></Td>
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

export default PageHoc(Mentors);

import React from "react";
import ModalWrapper from "../../Common/Modal/ModalWrapper";
import { Box, useDisclosure, Select } from "@chakra-ui/react";
import { CancelBtn } from "../../assets";

const Submission = ({ assignmentList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div className="flex flex-wrap justify-around gap-5">
        {assignmentList.map((item) => (
          <div
            key={item.id}
            onClick={onOpen}
            className="w-[95%] cursor-pointer p-5 mobile:w-[260px] tablet:w-[280px]"
          >
            <div className="mx-auto bg-[#F9F9F9]">
              <img
                className="w-fit mx-auto py-5 rounded-sm"
                src={item.image}
                alt="pdf"
              />
            </div>
            <p className="font-semibold leading-4 my-3">
              Oluchi Enebeli - My Assignment
            </p>
            <p className="text-grey text-[12px]">Submitted 4 hours ago</p>
          </div>
        ))}

        <ModalWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <img
            onClick={onClose}
            className="w-fit h-fit ml-auto mt-4"
            src={CancelBtn}
            alt="cancle"
          />
          <p className="text-[20px] mt-3 mb-5 font-bold">
            Create custodial wallet (Bundle; Binance; Luno; Buycoins) [Personal
            wallet]{" "}
          </p>
          <p className="font-semibold text-[black]">Link to sumbission:</p>
          <a href="#" className="text-primary mb-5 text-[14px]">
            https://github.com/my-assignment
          </a>

          <Box my={3}>
            <label className="block mb-3 font-semibold text-[16px]">
              Assign grade
            </label>
            <Select placeholder="---" w="100px" mb={3}>
              <option value="option1">A</option>
              <option value="option2">B</option>
              <option value="option3">C</option>
              <option value="option3">D</option>
              <option value="option3">E</option>
              <option value="option3">F</option>
            </Select>
            <label className="block text-blue font-semibold text-[16px]">
              Instruction
            </label>

            <textarea
              // value={value}
              // onChange={handleInputChange}
              // size='lg'
              className="border-[1.5px] w-full text-[16px] h-[150px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
            />
            <div className="flex">
              <button
                onClick={onClose}
                className="text-[16px] w-fit ml-auto rounded-md text-white py-2 px-4 mt-5 bg-primary"
              >
                Done
              </button>
            </div>
          </Box>
        </ModalWrapper>
      </div>
    </div>
  );
};

export default Submission;

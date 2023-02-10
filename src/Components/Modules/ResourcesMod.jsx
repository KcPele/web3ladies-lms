import React, { useState } from "react";
import ModalWrapper from "../../Common/Modal/ModalWrapper";
import ResoContent from "../Curriculum/ResoContent";
import { useDisclosure } from "@chakra-ui/react";
import { CancelBtn } from "../../assets";
import Input from "../../Common/Input/Input";
import Select from "../../Common/Select/Select";
import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResourcesMod = () => {
  const [isAdded, setIsAdded] = useState(true);
  const [value, setValue] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

  return (
    <div className="w-full tablet:w-[650px]">
      {isAdded ? (
        <div className="mt-[150px] flex">
          <button
            className="text-[#7D0BFE] border-[3px] font-semibold border-[#7D0BFE] w-fit mt-8 m-auto px-[25px] py-[8px] rounded-md "
            onClick={onOpen}
          >
            Add resources
          </button>
        </div>
      ) : (
        <div>
          <div className="flex mb-5"> 
            <button
              className="text-[#7D0BFE] border-[3px] font-semibold border-[#7D0BFE] w-fit mt-8 ml-auto px-[25px] py-[8px] rounded-md "
              onClick={onOpen}
            >
              Add resources
            </button>
          </div>
          <ResoContent />
        </div>
      )}

      <ModalWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div className="flex justify-between my-4">
          <p>Add resources</p>
          <img src={CancelBtn} alt="cancel" />
        </div>
        <div>
          <div className="w-[100px] mt-4 mb-6">
            <Select label="Week" option={weeks} />
          </div>
          <div>
            <Input
              type="text"
              label="Title"
              // value={regFormData.email}
              // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
            />
          </div>
          <Box my={3}>
            <label className="block text-blue mt-7 font-semibold text-[16px]">
              Resource format
            </label>
            <RadioGroup mt={2} mb={3} onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="Link">Video</Radio>
                <Radio value="File">Article</Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <div>
            <Input
              type="text"
              label="Link"
              // value={regFormData.email}
              // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
            />
          </div>
          <div>
            <p className="font-semibold mt-2">Description</p>
            <textarea
              // value={value}
              // onChange={handleInputChange}
              // size='lg'
              className="border-[1.5px] w-full text-[16px] h-[100px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center">
          <BsPlusLg className=" text-primary text-[16px]" />
          <p className="font-semibold text-primary">Add</p>
        </div>
        <div className="flex">
          <div
            onClick={() => {
              onClose();
              setIsAdded(false);
            }}
            as="button"
            className="text-[16px] ml-auto rounded-md text-white py-2 px-4 my-5 bg-primary"
          >
            Add resources
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};

export default ResourcesMod;

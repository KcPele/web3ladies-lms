import React from "react";
import { PageHoc } from "../../Components";
import Input from "../../Common/Input/Input";
import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const NewAssig = () => {
  const [value, setValue] = React.useState("");
  
  return (
    <>
      <div className="w-full tablet:w-[700px] p-4 tablet:p-6 rounded-md bg-white">
        <p className="font-bold text-[24px] mb-5">Create a new assignment</p>
        <div>
          <Input
            label="Email"
            type="email"
            // value={regFormData.email}
            // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
            placeholder="name@example.com"
          />
          <Box my={3}>
            <label className="block text-blue font-semibold text-[16px]">
              Instruction
            </label>

            <textarea
              // value={value}
              // onChange={handleInputChange}
              // size='lg'
              className="border-[1.5px] w-full text-[16px] h-[150px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
            />
          </Box>
          <Box my={3}>
            <label className="block text-blue font-semibold text-[16px]">
              Submission method
            </label>
            <RadioGroup mt={2} onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="Link">Link</Radio>
                <Radio value="File">File</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box className="flex gap-5 flex-wrap w-fit ml-auto mt-12">
            <button className="text-primary border-[2px] font-semibold border-primary py-2 px-3 rounded-sm hover:opacity-70">
              Save to draft
            </button>
            <button className="text-white bg-primary border-[2px] font-semibold border-primary py-2 px-3 rounded-sm hover:opacity-70">
              Create Assignment
            </button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default PageHoc(NewAssig);

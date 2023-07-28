import React from 'react'
// import { useParams } from 'react-router-dom'
import { PageHoc } from "../../Components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AssignInstruc } from './AssignInstruc';
import { AssignSubm } from './AssignSubm';

const AssignPage = () => {
  return (
    <div>
        <div className='flex gap-1 text-[16px]  font-semibold flex-wrap'>
            <p className='text-[20px] font-bold'>Assignment</p>
        </div>
        <Tabs pos={"relative"} bg="#fff" p="12px" rounded="sm" mt={4}>
          <div>
            <div className='flex flex-wrap justify-between'>
              <p className=' w-full mobile:w-[90%] tablet:w-[550px] text-[26px] font-bold leading-8'>Write a detailed PRD for the product you reseached in the last assignment</p>
            </div>
            <p className='text-[#858585] text-[14px] mt-3 mb-5 font-[400]'><span className="font-semibold">Deadline </span> Nov 4, 11:59 PM GMT WAT</p>
          </div>
               <TabList border="2px solid bgLight" className="overflow-x-auto overflow-y-hidden h-fit" >
          <Tab mr={{md:"0", lg:"4"}} h="fit-content" fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Instruction
            </Tab>
          <Tab mr={{md:"0", lg:"4"}} h="fit-content"  fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Submissions
        </Tab>
        </TabList>

        <TabPanels mt="20px">
          <TabPanel>
            <AssignInstruc />
          </TabPanel>
          <TabPanel>
            <AssignSubm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default PageHoc(AssignPage)
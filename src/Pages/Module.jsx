import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { PageHoc } from "../Components";
import DesignModule from "../Components/Modules/DesignModule"
import { assignmentData, modulesData } from "../Data"


const Module = () => {
  return (
    <>
    <p className="text-[24px] mb-5 font-bold">Module</p>
      <Tabs pos={"relative"}>
               <TabList border="2px solid bgLight" className="overflow-x-auto overflow-y-hidden h-fit" >
          <Tab mr={{md:"0", lg:"4"}} h='fit-content' fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Product Design
            </Tab>
          <Tab mr={{md:"0", lg:"4"}} h='fit-content'  fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Web Development
        </Tab>
          <Tab mr={{md:"0", lg:"4"}} h='fit-content'  fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Product Management
        </Tab>
        <Tab mr={{md:"0", lg:"4"}} h='fit-content'  fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Blockchain Development
        </Tab>
        </TabList>

        <TabPanels mt="20px">
          <TabPanel>
            <DesignModule modulesData={modulesData} assignmentData={assignmentData} />
          </TabPanel>
          <TabPanel>
            <DesignModule modulesData={modulesData} assignmentData={assignmentData} />
          </TabPanel>
          <TabPanel>
            <DesignModule modulesData={modulesData} assignmentData={assignmentData} />
          </TabPanel>
          <TabPanel>
            <DesignModule modulesData={modulesData} assignmentData={assignmentData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PageHoc(Module);

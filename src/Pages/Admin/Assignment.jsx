import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { PageHoc } from "../../Components";
import Design from "../../Components/Assignment/Design"
import { assignmentData } from "../../Data"


const Assignment = () => {
  return (
    <>
      <Tabs pos={"relative"}>
        <TabList border="2px solid bgLight" className="overflow-x-auto overflow-y-hidden h-[44px]" >
          <Tab mr={{md:"0", lg:"4"}} fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Product Design
            </Tab>
          <Tab mr={{md:"0", lg:"4"}}  fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Web Development
        </Tab>
          <Tab mr={{md:"0", lg:"4"}}  fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Product Management
        </Tab>
        <Tab mr={{md:"0", lg:"4"}}  fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Blockchain Development
        </Tab>
        </TabList>

        <TabPanels mt="20px">
          <TabPanel>
            <Design assignmentData={assignmentData}/>
          </TabPanel>
          <TabPanel>
            <Design assignmentData={assignmentData}/>
          </TabPanel>
          <TabPanel>
            <Design assignmentData={assignmentData}/>
          </TabPanel>
          <TabPanel>
            <Design assignmentData={assignmentData}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PageHoc(Assignment);
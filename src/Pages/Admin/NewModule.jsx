import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { PageHoc } from "../../Components";
import CurriculumMod from "../../Components/Modules/CurriculumMod";
import ResourcesMod from "../../Components/Modules/ResourcesMod";


const NewModule = () => {
  return (
    <>
    <p className="text-[24px] mb-5 font-bold">Create module</p>
      <Tabs pos={"relative"}>
               <TabList border="2px solid bgLight" className="overflow-x-auto overflow-y-hidden h-fit" >
          <Tab mr={{md:"0", lg:"4"}} h="fit-content" fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"3px solid #7D0BFE" }}>
          Curriculum
            </Tab>
          <Tab mr={{md:"0", lg:"4"}} h="fit-content" fontSize={"18px"} fontWeight="600" color={"grey"}  _selected={{ color: '#7D0BFE', borderBottom:"3px solid #7D0BFE" }}>
          Resources
        </Tab>
        </TabList>

        <TabPanels mt="20px">
          <TabPanel>
            <CurriculumMod />
          </TabPanel>
          <TabPanel>
            <ResourcesMod />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PageHoc(NewModule);

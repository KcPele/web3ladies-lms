import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TDetails from "./TDetails";
import TMentees from "./TMentees";
import TMentor from "./TMentor";

const TrackTab = () => {
  return (
    <>
      <Tabs pos={"relative"}>
               <TabList border="2px solid bgLight" className="overflow-x-auto overflow-y-hidden h-fit" >

          <Tab mr={{md:"0", lg:"4"}} h="fit-content"  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Detail
            </Tab>
          <Tab mr={{md:"0", lg:"4"}} h="fit-content" _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Mentors
        </Tab>
          <Tab mr={{md:"0", lg:"4"}} h="fit-content" _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Mentees
        </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TDetails />
          </TabPanel>
          <TabPanel>
            <TMentor />
          </TabPanel>
          <TabPanel>
            <TMentees />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TrackTab;

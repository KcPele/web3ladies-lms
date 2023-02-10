import React from "react";
import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel 
} from "@chakra-ui/react";
import AccountTab from "./AccountTab";
import ProfileTab from "./ProfileTab";
import PasswordTab from "./PasswordTab";
import NotificationTab from "./NotificationTab";

const SettingsTab = () => {
  return (
    <>
      <Tabs className="w-full">
               <TabList border="2px solid bgLight" className="overflow-x-auto overflow-y-hidden h-fit" >
          <Tab px={{base:"2px", md:"4", lg:"6"}}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Account
            </Tab>
          <Tab px={{base:"2px", md:"4", lg:"6"}} _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Profile
        </Tab>
          <Tab px={{base:"2px", md:"4", lg:"6"}} _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Password
        </Tab>
        <Tab px={{base:"2px", md:"4", lg:"6"}} _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
        Notifications
        </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AccountTab />
          </TabPanel>
          <TabPanel>
           <ProfileTab />
          </TabPanel>
          <TabPanel>
            <PasswordTab />
          </TabPanel>
          <TabPanel>
            <NotificationTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default SettingsTab;

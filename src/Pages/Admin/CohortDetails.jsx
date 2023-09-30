import React, { useState, useEffect } from "react";
import { PageHoc } from "../../Components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CreateCohort from "../../Components/ChortBoot/CreateCohort";
import TMentees from "../../Components/Tracks/TMentees";
import TMentor from "../../Components/Tracks/TMentor";
import { useParams } from "react-router-dom";

import { useAppStateContent } from "../../context/AppStateContext";
import { getAllRequest, getRequest } from "../../request/indext";

const CohortDetails = () => {
  const { token } = useAppStateContent();
  const [cohortsData, setCohortsData] = useState({});
  const [featuredTracks, setFeaturedTracks] = useState([]);
  let { id: cohortId } = useParams();
  useEffect(() => {
    const getTracks = async () => {
      let res = await getRequest("cohorts", cohortId, token);
      let resTracks = await getAllRequest("tracks", token);

      if (resTracks.statusText === "OK") {
        setFeaturedTracks(
          resTracks.data.docs.map((track) => ({
            name: track.name,
            id: track.id,
          }))
        );
      }
      //check if the response is ok
      if (res.statusText === "OK") {
        setCohortsData(res.data);
      }
    };
    getTracks();
  }, [token]);
  return (
    <div className="w-full">
      <p className="font-bold text-[26px] mb-8">Cohort One</p>
      <Tabs pos={"relative"} bg="#fff" p="12px" rounded="sm" mt={4}>
        <TabList
          border="2px solid bgLight"
          className="overflow-x-auto overflow-y-hidden h-fit"
        >
          <Tab
            mr={{ md: "0", lg: "4" }}
            h="fit-content"
            fontSize={"18px"}
            fontWeight="600"
            color={"grey"}
            _selected={{ color: "#7D0BFE", borderBottom: "2px solid #7D0BFE" }}
          >
            Details
          </Tab>
          <Tab
            mr={{ md: "0", lg: "4" }}
            h="fit-content"
            fontSize={"18px"}
            fontWeight="600"
            color={"grey"}
            _selected={{ color: "#7D0BFE", borderBottom: "2px solid #7D0BFE" }}
          >
            Mentors
          </Tab>
          <Tab
            mr={{ md: "0", lg: "4" }}
            h="fit-content"
            fontSize={"18px"}
            fontWeight="600"
            color={"grey"}
            _selected={{ color: "#7D0BFE", borderBottom: "2px solid #7D0BFE" }}
          >
            Mentees
          </Tab>
        </TabList>

        <TabPanels mt="20px">
          <TabPanel>
            <div className="w-full tablet:w-[70%]">
              <CreateCohort
                featuredTracks={featuredTracks}
                cohortDetails={cohortsData}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <TMentor />
          </TabPanel>
          <TabPanel>
            <TMentees />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PageHoc(CohortDetails);

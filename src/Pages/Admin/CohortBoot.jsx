import React, { useState, useEffect } from "react";
import { PageHoc } from "../../Components";
import Card from "../../Components/ChortBoot/Card";
import { modulesData } from "../../Data";
import { useAppStateContent } from "../../context/AppStateContext";
import { getAllRequest } from "../../request/indext";

const CohortBoot = () => {
  const { token } = useAppStateContent();
  const [cohortsData, setCohortsData] = useState({});

  useEffect(() => {
    const getCohorts = async () => {
      let res = await getAllRequest("cohorts", token);
      //check if the response is ok
      if (res.statusText === "OK") {
        setCohortsData(res.data);
      }
    };
    getCohorts();
  }, [token]);
  return (
    <div>
      <p className="font-bold text-[26px] mb-8">Cohorts</p>

      {cohortsData && <Card modulesData={cohortsData.docs} />}

      <p className="font-bold text-[26px] mt-10 mb-8">Bootcamps</p>
      {cohortsData && <Card modulesData={cohortsData.docs} />}
    </div>
  );
};

export default PageHoc(CohortBoot);

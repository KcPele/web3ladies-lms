import React, { useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const table = {
  header: [
    {
      name:'Item'
    },
    {
      name: 'Status'
    }, 
    {
      name:'Due',
     },
     {
      name:'Wieght'
     }, 
     {
      name:'Grade'
}],
 
  content: [
    {
      desc: "Create non-custodial wallet (Metamask; Trust wallet; Rainbow; Binance chain wallet) [Personal wallet]",
      status: "Completed",
      due: "Oct 16  11:59 PM WAT",
      wieght: "---",
      grade: "A",
      id: 1,
    },
    {
      desc: "Create non-custodial wallet (Metamask; Trust wallet; Rainbow; Binance chain wallet) [Personal wallet]",
      status: "Pending",
      due: "Oct 16  11:59 PM WAT",
      wieght: "---",
      grade: "-",
      id: 2,
    },
    {
      desc: "Create non-custodial wallet (Metamask; Trust wallet; Rainbow; Binance chain wallet) [Personal wallet]",
      status: "Pending",
      due: "Oct 16  11:59 PM WAT",
      wieght: "---",
      grade: "-",
      id: 3,
    },
  ],
};
const AssignDash = ({assignment}) => {
  return (
    <>
       <div className="w-[100%] max-w-[1200px] ">
         
          <div className='bg-[#fff]  py-5'>

          <div className='min-w-[700px] w-full  '>

        {assignment?.map(
          ({ id, title, url, status, hasSubmitted}) => (
        <Row key={id} className="px-5 py-3 border-b-[1.5px] border-[#F3E9FE] ">
          <Col xs={14} sm={14} md={14} lg={14} xl={14} className="text-[17px] flex gap-2 items-start"><div className="mt-[0.6rem] h-[0.4rem] w-[0.5rem] bg-[#F3E9FE] rounded-full"></div>{title}</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="flex">
              <div 
                  className={`text-[12px] m-auto font-[500] w-fit px-2 py-1.5 border rounded-md ${
                    status === "New"
            ? "text-[#3EB876] bg-[#ECF8F2] border-[rgba(62, 184, 118, 0.2)]"
            : status === "Pending"
            ? "text-[#FF5F2D] bg-[#FFF2EA] border-[rgba(255, 95, 45, 0.2)]"
            : "text-[#7D0BFE] bg-[#F2E7FF] border-[gba(125, 11, 254, 0.2)]"
        }  rounded border-[1px] `}
              > {status}
              </div></Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2} className="flex">
          <Link to={url} className="m-auto text-[#AAA3B1]">
          View
        </Link>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="flex "> {!hasSubmitted && <button className="text-[#7D0BFE] mx-auto">Submit</button>}</Col>
        </Row>
          ))}
          </div>
          </div>

          
      </div>
    </>
  );
};

export default AssignDash;

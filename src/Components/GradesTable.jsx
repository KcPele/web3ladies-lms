import React, { useState } from "react";
import { Col, Row } from "antd";

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
const GradesTable = () => {
    const [isDue, setIsDue] = useState(true)
  return (
    <>
      <div className="w-[100%] max-w-[1200px] ">
          {isDue && 
              <div className="mt-1 mb-4 px-3">
                  <div className="flex gap-3">
                      <div className="text-[#FF5F2D] bg-[#F8F2FF] rounded-full text-center h-[25px] w-[25px]">1</div>
                      <div>Due date has passed for 1 assignments items.</div>
                  </div>
              </div>
          }
          <div className='bg-[#fff] rounded-2xl py-5'>

        <Row className="min-w-[700px] w-full  px-5 pb-3 border-b-2 border-[#F3E9FE]  text-[18px] font-[600] text-[#858585]">
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="text-[1.2rem] flex"><div className="mt-[0.6rem] h-[0.5rem] w-[1rem] bg-[#fff] rounded-full"></div>Item</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className=" ">Status</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">Due</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">Weight</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">Grade</Col>
        </Row>
          <div className='min-w-[700px] w-full  '>

        {table?.content?.map(
          ({ id, desc, status, due, wieght, grade }) => (
        <Row key={id} className="px-5 py-3 border-b-[1.5px] border-[#F3E9FE] ">
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="text-[17px] flex gap-2 items-start"><div className="mt-[0.6rem] h-[0.5rem] w-[1.5rem] bg-[#F3E9FE] rounded-full"></div>{desc}</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">
              <div 
                  className={`text-[10px] font-[500] w-fit px-2 py-1.5 border rounded-md ${
                  status === "Completed" 
                    ? "bg-[#F2E7FF] border-[#F3E9FE] text-[#7D0BFE]"
                    : "bg-[#FFF2EA] border-[rgb(255, 95, 45, 0.20)] text-[red]"}`}
              > {status}
              </div></Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">{due}</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">{wieght}</Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">{grade}</Col>
        </Row>
          ))}
          </div>
          </div>

          
      </div>
    </>
  );
};

export default GradesTable;

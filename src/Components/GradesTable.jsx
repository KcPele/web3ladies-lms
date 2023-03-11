import React, { useState } from "react";

import { Col, Row } from "antd";

const table = {
 
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
    <div className="w-[750px] ">
        {isDue && 
            <div className="my-4 p-3">
                <div className="flex gap-3">
                    <div className="text-[#FF5F2D] bg-[#F8F2FF] rounded-full text-center h-[25px] w-[25px]">1</div>
                    <div>Due date has passed for 1 assignments items.</div>
                </div>
            </div>
        }
      <Row className="py-3 pl-2 border-b-2 border-[#858585]  text-[18px] font-[600] text-[#858585]">
        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="">Item</Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className=" ">Status</Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">Due</Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">Weight</Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="">Grade</Col>
      </Row>

      {table?.content?.map(
        ({ id, desc, status, due, wieght, grade }) => (
      <Row key={id} className="py-2 pl-2 border-b-[1.5px] border-[#858585] ">
        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="font-[500]">{desc}</Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="my-auto">
            <div 
                className={`m-auto w-fit p-2  ${
                status === "Completed" 
                  ? "bg-[#F8F2FF] text-[#7D0BFE]"
                  : "bg-[#F8F2FF] text-[red]"}`}
            > {status}
            </div></Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="my-auto">{due}</Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="my-auto">{wieght}</Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="my-auto">{grade}</Col>
      </Row>
        ))}
        
    </div>
  );
};

export default GradesTable;

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { classReso } from "../../Data";

const ResoContent = () => {
  return (
    <>
      <div   className="w-fit   p-2 bg-gray-100 rounded-[3px]">
        {classReso?.map((item) => (
          <Accordion key={item.id} allowMultiple >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon className="mb-3 " />
                  <Box as="span" textAlign="left">
                    {item.header}
                    <div   className="tablet:w-[650px] w-full  h-[2px] mt-2 bg-gray-400"></div>
                  </Box>
                </AccordionButton>
              </h2>
              {item.list.map((list) => (
                <AccordionPanel key={list.id} pb={4}>
                  <Link to={`/classroom/${list.id}`} >
                    <div   className="flex mx-1 ">
                      <div className="flex items-center justify-center ring-2 ring-gray-900 w-fit h-fit p-3 rounded-full mt-1 ">
                        <img src={list.img} alt="play" />
                      </div>

                      <div   className="ml-3">
                        <p   className="text-lg text-[black] font-medium">
                          {list.title}
                        </p>
                        <p   className="text-xs text-gray-500">{list.time}</p>
                      </div>
                    </div>
                  </Link>
                </AccordionPanel>
              ))}
            </AccordionItem>
          </Accordion>  
        ))}
      </div>
    </>
  );
};

export default ResoContent;

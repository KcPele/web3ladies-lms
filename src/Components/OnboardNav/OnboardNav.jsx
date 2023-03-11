import { useState } from "react";
import { onboardIcon } from "../../assets";


const list = ["Leaderboard", "Mentee Status","Tracks", "Assignments","Classroom"]
const number = [1,2,3,4,5]

export default function Onboard1({ showModal, setShowModal }) {
  const [item, setItem] = useState(0);

  return (
    <div className="w-full">
      {showModal ? (
        <>
          <div className={`justify-center items-center w-fit h-fit overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${
            item === 0
            ? "left-[25%] top-[55%]"
            : item === 1 ? "left-[72%] top-[5%]"
            : item === 2 ? "left-[25%] top-[10%]" 
            : item === 3 ? "left-[20%] top-[17%]"
            : "left-[20%] top-[7%]"  
          }
          
          `}>
            <img src={onboardIcon} alt="" className="relative h-[80px] mb-2" />
            <div className="relative mx-auto w-[300px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-4 bg-[#3EB876] text-white outline-none focus:outline-none">
                {/*header*/}
                <div className="rounded-t">
                  <p className="text-[#26784B]">{number[item]}/5</p>
                  <h3 className="text-[16px] pt-[2px] font-semibold">
                    {list[item]}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative py-[2px] flex-auto">
                  <p className="text-[12px] font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada aenean felis tincidunt egestas imperdiet elit
                    mattis volutpat.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center mt-[6px] justify-between rounded-b">
                  
                  {item === 4 ? ( 
                  <button
                    className="text-white text-[12px] background-transparent px-3 py-[1.5px] rounded-[12px] border-[1.5px] border-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false)
                    }}
                  >
                    Next
                  </button>
                  ) : (
                    <button
                    className="text-white text-[12px] background-transparent px-3 py-[1.5px] rounded-[12px] border-[1.5px] border-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setItem((currentPage) => currentPage + 1);
                    }}
                  >
                    Next
                  </button>
                  )
                }
                  <button
                    className="text-[#76F4B0] active:bg-emerald-600 text-[12px] px-3 py-[1.5px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-40 cursor-pointer fixed inset-0 z-40 bg-black"
            // onClick={() => setShowModal(null)}
          >
            <button
              className="bg-emerald-500 text-primary active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              // onClick={() => setShowModal(false)}
            >
              Save Changes
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

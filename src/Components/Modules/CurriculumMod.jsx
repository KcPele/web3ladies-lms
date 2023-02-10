import React from 'react'
import Input from '../../Common/Input/Input'
import Select from "../../Common/Select/Select"

const CurriculumMod = () => {
    const weeks = [1,2,3,4]
  return (
    <div className='w-full tablet:w-[600px]'>
        <div className='border-b-2 border-[#858585] pb-3'>
            <p className='font-semibold text-[18px]'>Module theme</p>
            <Input 
                placeholder="Oluchi"
                type="text"
                // value={regFormData.email}
                // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
            />
        </div>
        <div className='flex gap-4 flex-wrap items-center'>
            <div className='w-[80px] mt-4'>
                <Select label="Weeks" option={weeks} />
            </div>
            <span className='text-primary font-semibold mt-12'>Create weeks</span>
        </div>
        <div>
            <p className='font-semibold text-[18px] mt-10'>Week 1</p>
            <div >
                <div className='flex mt-8'>
                    <p className='font-semibold text-[14px] mt-4 w-[120px]'>Title</p>
                    <Input 
                        type="text"
                        // value={regFormData.email}
                        // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
                    />
                </div>
                <div className='flex gap-5 mt-4'>
                <p className='font-semibold text-[14px] mt-2 w-[120px]'>Description</p>
                    <textarea
                    // value={value}
                    // onChange={handleInputChange}
                    // size='lg'
                    className="border-[1.5px] w-full text-[16px] h-[150px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
                    />
                </div>
            </div>
        </div>
        <div>
            <p className='font-semibold text-[18px] mt-10'>Week 2</p>
            <div >
                <div className='flex mt-8'>
                    <p className='font-semibold text-[14px] mt-4 w-[120px]'>Title</p>
                    <Input 
                        type="text"
                        // value={regFormData.email}
                        // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
                    />
                </div>
                <div className='flex gap-5 mt-4'>
                    <p className='font-semibold text-[14px] mt-2 w-[120px]'>Description</p>
                    <textarea
                    // value={value}
                    // onChange={handleInputChange}
                    // size='lg'
                    className="border-[1.5px] w-full text-[16px] h-[150px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
                    />
                </div>
                <div className='flex'>
                <button
                  className=" bg-[#7D0BFE] w-fit mt-8 ml-auto text-white px-[20px] py-[8px] rounded-md "
                //   onClick={() => {
                //     onClose();
                //     setIsSuccess(false);
                //   }}
                >
                  Create Module
                </button>
                </div>
            </div>
        </div>
    </div>
  )

}

export default CurriculumMod
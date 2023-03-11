import React from 'react'
import RingBtn from '../../Common/Button/RingBtn'

const CurrContent = () => {
  return (
    <div className="w-fit">
      <p className="text-[18px] font-[700] my-3">Module One </p>
      <p className="text-[16px] font-[600] ">Week 1: DeFI Exploration</p>
      <p className="my-2 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus arcu
        pulvinar lacus neque, tempus quam. Nec, amet a, nulla nunc amet purus.
        Vel quam vel montes, in gravida lectus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Netus arcu pulvinar lacus neque, tempus
        quam. Nec, amet a, nulla nunc amet purus. Vel quam vel montes, in
        gravida lectus.
      </p>

      <ol   className="list-decimal">
        <li className=" text-[16px] mt-6 font-[600]">
        What is a Crypto Wallet?
        </li>
      </ol>
      <ul   className="list-disc">
        <li className="text-[16px] mt-2 mx-8 font-[500]"> Explanation Wallet</li>
      </ul>
      <RingBtn text="Go to resources" link="resourcecontent"/>
    </div>
  )
}

export default CurrContent

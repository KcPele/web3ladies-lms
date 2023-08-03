import React from "react";
import Input from "../../Common/Input/Input";
import Select from "../../Common/Select/Select";

const options = [
  "Select Tracks",
  "Blockchain Development",
  "Frontend",
  "Backend",
];

const Reg2 = ({ formik }) => {
  return (
    <div className="w-[90%] mb-5">
      <p className="text-[18px] mb-16">
        Enter your information below to create an account
      </p>
      <div className="my-3">
        <label htmlFor="slackUserName" className="block font-semibold text-[16px]">
        Slack Username
        </label>
        <input
          id="slackUserName"
          type="text"
          placeholder=""
          value={formik.values.slackUserName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border-[1.5px] w-full text-[16px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
        />
        {formik.touched.slackUserName && formik.errors.slackUserName ? (
          <div className=" text-[red] text-[14px] italic">
            {formik.errors.slackUserName}
          </div>
        ) : null}
      </div>

      {/* <Select label="Track" option={options} /> */}
      <div>
        <label htmlFor="track" className="block text-blue font-semibold text-[16px]">
          Track
        </label>
        <select
          id="track"
          name='track'
          value={formik.values.track}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full outine-[1.5px] outline-primary border-[1.5px] border-[black] px-3 py-1 mt-1 rounded-sm "
        >
          {options.map((options) => (
            <option key={options} value={options}>{options}</option>
          ))}
        </select>
        {formik.touched.track && formik.errors.track ? (
          <div className=" text-[red] text-[14px] italic">
            {formik.errors.track}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Reg2;

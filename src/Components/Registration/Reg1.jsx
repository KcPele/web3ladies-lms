import React from "react";
import Input from "../../Common/Input/Input";
import PasswordInput from "../../Common/Input/PasswordInput";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { Progress } from "antd";

const Reg1 = ({ formik, show, handleClick }) => {
  return (
    <div className="w-full">
      <p className="text-[18px] mb-4 font-semibold">
        Enter your information below to create an account
      </p>
      <div className="w-[90%]">
        <div className="my-3">
          <label htmlFor="email" className="block font-semibold text-[16px]">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-[1.5px] w-full text-[16px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className=" text-[red] text-[14px] italic">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="my-3">
          <label htmlFor="fullName" className="block font-semibold text-[16px]">
            FullName
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="name@example.com"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-[1.5px] w-full text-[16px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className=" text-[red] text-[14px] italic">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>
        <div className="my-3 relative">
          <label htmlFor="password" className="block font-semibold text-[16px]">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-[1.5px] w-full text-[16px] border-[black] outline-[1.5px] outline-primary px-3 py-1 mt-1 rounded-sm"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className=" text-[red] text-[14px] italic">
              {formik.errors.password}
            </div>
          ) : null}
          <div className="absolute top-10 right-4" onClick={handleClick}>
            {show ? <BsEyeFill /> : <BsEyeSlashFill />}
          </div>
        </div>
        <div className="flex justify-between -mt-3 w-full font-semibold text-[16px] text-hash">
          <p>Password strength</p>
          <div className="flex gap-2 items-center">
            <p>Strong!</p>
            <Progress
              className="w-[100px] my-auto"
              percent={50}
              size="small"
              showInfo={false}
            />
          </div>
        </div>

        <div className="my-4 bg-light py-2 px-4 w-full rounded-lg">
          <div className="text-hash font-semibold">
            <div className=" text-[16px]">Password must include:</div>
            <div className="flex gap-2 items-center my-1">
              <div className="w-[10px] h-[10px] bg-green rounded-full "></div>
              Atleast 8 characters
            </div>
            <div className="flex gap-2 items-center my-1">
              <div className="w-[10px] h-[10px] bg-green rounded-full "></div>
              Atleast one special character e.g #(%&
            </div>
            <div className="flex gap-2 items-center my-1">
              <div className="w-[10px] h-[10px] bg-green rounded-full "></div>
              Atleast one number e.g 1234
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg1;

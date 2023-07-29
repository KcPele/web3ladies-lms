import React, { useState } from "react";
import BtnIcon from "../Common/Button/BtnIcon";
import PupleBtn from "../Common/Button/PupleBtn";
import Input from "../Common/Input/Input";
import PasswordInput from "../Common/Input/PasswordInput";
import { Flex, Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import Google from "../Assests/Google.svg";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      // setLoading(true);
      // login(values.email, values.password);
    },
  });
  return (
    <div>
      <p className="text-[28px] mb-8 leading-9 font-[700]">
        Login into your account
      </p>
      <div className="mobile_l:w-[80%] w-full ">
        <form onSubmit={formik.handleSubmit}>
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
          <div className="my-3 relative">
            <label
              htmlFor="password"
              className="block font-semibold text-[16px]"
            >
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
          <div className="w-full">
            {!loading ? (
              <button className="text-[16px] my-3 rounded-md py-3 text-white w-full bg-primary">
                Login
              </button>
            ) : (
              <Button
                isLoading
                colorScheme="primary"
                variant="outline"
                spinnerPlacement="end"
                width={"full"}
                mt={4}
                py={4}
              >
                Continue
              </Button>
            )}
          </div>
          <div className="flex">
            <Link
              className="underline hover:underline hover:text-black mx-auto text-primary text-center"
              to="/registration"
            >
              Create an account
            </Link>
          </div>

          <div className="text-center"> or </div>
          <BtnIcon text="Continue with Google" icon={Google} />
          <Flex justify={"space-between"}>
            <Checkbox
            // defaultChecked
            >
              Remember me
            </Checkbox>
            <Link to="/resetpassword" className="">
              Forgot your password?
            </Link>
          </Flex>
        </form>
      </div>
    </div>
  );
};

export default Login;

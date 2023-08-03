import React, { useState } from "react";
import Reg1 from "../Components/Registration/Reg1";
import Reg2 from "../Components/Registration/Reg2";
import { Button } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import RegSuccess from "../Components/Registration/RegSuccess";
import { RegImg } from "../Components";
import { useFormik } from "formik";
import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  fullName: Yup.string().required("Full name is required"),
  password: Yup.string().required("Password is required"),
  slackUserName: Yup.string().required("slack is required"),
  track: Yup.string().required("choose a track"),
});


const Registration = () => {
  const [page, setPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // const [regFormData, setRegFormData] = useState({
  //   email: "",
  //   fullName: "",
  //   password: "",
  //   slackUserName: "",
  //   track: "",
  // });

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      slackUserName: "",
      track: "",
    },

    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values)
      setPage((currentPage) => currentPage + 1);
      // setLoading(true);
      // login(values.email, values.password);
    },
  });

  // console.log(regFormData)

  const FormDisplay = () => {
    if (page === 0) {
      return <Reg1 formik={formik} show={show} handleClick={handleClick} />;
    } else if (page === 1) {
      return <Reg2 formik={formik} show={show} handleClick={handleClick} />;
    } else {
      return <RegSuccess />;
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-7 w-[90%] ">{FormDisplay()}</div>
      <div>
        {page === 0 ? (
          <div
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
            className="w-[82%] flex gap-3 items-center justify-center text-[16px] my-3 rounded-lg text-white p-2 bg-primary"
          >
            Continue
            <BiRightArrowAlt />
          </div>
        ) : page === 1 ? (
          <>
          <div className="w-full">
            {!loading ? (
              <button type='submit'             
              className="w-[82%] flex gap-3 items-center justify-center text-[16px] my-3 rounded-lg text-white p-2 bg-primary"
              >
                Login
              </button>
            ) : (
              <Button
                isLoading
                // loadingText="Please wait"
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
          </>
        ) : (
          <div className="w-[82%] flex gap-3 items-center justify-center text-[16px] my-3 rounded-lg text-white p-2 bg-primary">
            Go to Email
          </div>
        )}
      </div>
    </form>
  );
};

export default RegImg(Registration);

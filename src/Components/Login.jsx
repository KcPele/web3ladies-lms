import React from 'react'
import BtnIcon from '../Common/Button/BtnIcon'
import PupleBtn from '../Common/Button/PupleBtn'
import Input from "../Common/Input/Input";
import PasswordInput from "../Common/Input/PasswordInput";
import { Flex, Checkbox } from "@chakra-ui/react"

import Google from '../Assests/Google.svg'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <p className="text-[28px] mb-8 leading-9 font-[700]">Login into your account</p>
        <div className='mobile_l:w-[80%] w-full '>
          <form>
            <Input
            label="Email"
            type="email"
            // value={regFormData.email}
            // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
            placeholder="name@example.com"
            />
            <PasswordInput 
            label="Password" 
            placeholder="Password"
            // value={regFormData.password}
            // onChange={(e) => setRegFormData({...regFormData, password: e.target.value})}  
            />
            <PupleBtn text="Login" link="/dashboard"/>
            {/* <LightBtn text="Sign in"/> */}
            <div className='text-center'> or </div>
            <BtnIcon text="Continue with Google" icon={Google}/>
            <Flex justify={"space-between"}>
                <Checkbox
                    // defaultChecked
                >
                    Remember me
                </Checkbox>
                <Link to="/resetpassword" className=''>
                        Forgot your password?
                </Link>
            </Flex>
          </form>
        </div>

    </div>
  )
}

export default Login
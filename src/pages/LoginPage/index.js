import React, { useState } from "react";
import { toast } from "react-toastify";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import imgRight from "../../assets/images/bg.png";
import logo from "../../assets/logo/logo.png";
import Container from "components/ui/Container";

const LoginPage = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [loading, setLoading] = useState(false);

  const [formInput, setFormInput] = useState({
    password: "",
    email: "",
  });

  const [error, setError] = useState({});

  const validation = (e) => {
    const msg = {};

    if (formInput.email.trim() === "") {
      msg.email = "Email is requied!";
    } else if (!formInput.email.match(emailRegex)) {
      msg.email = "Email is valid!";
    }

    if (formInput.password.trim() === "") {
      msg.password = "Password is requied!";
    }

    setError(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleKeyUp = () => {
    validation();
  };

  const handleOnchangeFormInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    const isValid = validation();

    try {
      if (isValid) {
        setLoading(true);

        toast.success("Log In Success !!!");
        setFormInput({
          password: "",
          email: "",
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <div className="min-h-screen bg-[#D4D6EA] flex items-center justify-center">
      <Container className="flex justify-center">
        <div className="xl:w-[115rem] xl:h-[80rem] bg-[#ffffff] flex items-center justify-start">
          <div className="xl:w-[55rem] p-[2rem] xl:pl-[8rem] xl:pr-[10rem] py-[5rem] xl:py-[9rem]">
            <div className="w-[6rem] h-[5rem]">
              <img src={logo} alt="logo" />
            </div>
            <h2 className="font-[600] text-[3rem] mt-[2rem] xl:mt-[3.5rem]">
              Welcome back !
            </h2>
            <h5 className="text-[1.4rem] mt-[1.5rem] mb-[2.5rem]">
              Enter to get unlimited access to data & information
            </h5>
            <div className="flex flex-col gap-y-[1rem]">
              <div className="text-[1.4rem] text-[#1F1B38] font-[500]">
                Email <span className="text-[#f53838]">*</span>
              </div>
              <input
                className="border-[0.1rem] border-[#F0EFF2] border-solid rounded-[0.5rem] w-full p-[1.5rem] text-[1.4rem]"
                placeholder="Enter your mail address"
                autoComplete="off"
                type="text"
                name="email"
                value={formInput.email}
                onKeyUp={handleKeyUp}
                onChange={handleOnchangeFormInput}
              />
              <p className="text-[#e93c3c] text-[1.4rem] pt-[0.5rem]">
                {error.email}
              </p>
            </div>
            <div className="flex flex-col gap-y-[1rem] my-[2rem]">
              <div className="text-[1.4rem] text-[#1F1B38] font-[500]">
                Password <span className="text-[#f53838]">*</span>
              </div>
              <div className="border-[0.1rem] border-[#F0EFF2] border-solid rounded-[0.5rem] w-full flex items-center justify-between p-[1.5rem]">
                <input
                  className="text-[1.4rem]"
                  placeholder="Enter password"
                  autoComplete="off"
                  type={passwordShow ? "text" : "password"}
                  name="password"
                  value={formInput.password}
                  onKeyUp={handleKeyUp}
                  onChange={handleOnchangeFormInput}
                />
                {passwordShow ? (
                  <AiOutlineEye
                    className="text-[#A7A5AF] text-[2rem] cursor-pointer"
                    onClick={togglePassword}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="text-[#A7A5AF] text-[2rem] cursor-pointer"
                    onClick={togglePassword}
                  />
                )}
              </div>
              <p className="text-[#e93c3c] text-[1.4rem] pt-[0.5rem]">
                {error.password}
              </p>
            </div>
            <div className="flex items-center justify-between text-[1.4rem]">
              <div className="flex items-center justify-center gap-x-[1rem]">
                {!checkbox ? (
                  <IoMdCheckbox
                    className="text-[#4C37D2] text-[2rem] cursor-pointer"
                    onClick={toggleCheckbox}
                  />
                ) : (
                  <MdCheckBoxOutlineBlank
                    className="text-[#4C37D2] text-[2rem] cursor-pointer"
                    onClick={toggleCheckbox}
                  />
                )}

                <span className="text-[#615A76] font-[600]">Remember me</span>
              </div>
              <div className="text-[#4F4495] font-[500] cursor-pointer">
                Forgot your password ?
              </div>
            </div>
            <button
              className="bg-[#5138ED] text-[#AA9AFF] w-full rounded-[0.5rem] py-[1.5rem] my-[3rem] btn-epic"
              onClick={onsubmit}
            >
              <div>
                <span>Log In</span>
                <span>Log In</span>
              </div>
            </button>
            <div className="relative h-[0.1rem] w-full bg-[#E8E8E8]">
              <div className="absolute top-[50%] left-[50%] p-[1rem] translate-x-[-50%] translate-y-[-50%] bg-[#ffffff] text-[#9D9EA6] text-[1.2rem]">
                Or, Login with
              </div>
            </div>
            <div className="border-[0.1rem] border-[#F0EFF2] border-solid rounded-[0.5rem] flex items-center justify-center gap-x-[1rem] mt-[3rem] mb-[2rem] py-[1.5rem] cursor-pointer text-[#473F64] hover:text-[#ffffff] hover:bg-[#3ad2d0] transition-all duration-500 ease-in-out">
              <FcGoogle className="text-[3rem]" />
              <span className="text-[1.2rem] font-[600]">
                Sign up with google
              </span>
            </div>
            <div className="text-[1.4rem] font-[600] text-center">
              Don't have an account ?{" "}
              <span className="text-[#574BA1] underline decoration-[#574BA1] font-[500]">
                Register here
              </span>
            </div>
          </div>
          <div className="flex-1 h-full hidden xl:block">
            <img src={imgRight} alt="img right" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;

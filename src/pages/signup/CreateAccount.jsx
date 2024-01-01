import React from "react";
import { useNavigate } from "react-router-dom";
import BtnContinue from "../../components/BtnContinue";
import InputForm from "../../components/InputForm";

function CreateAccount() {
  const navigation = useNavigate();
  const handleContinue = () => {
    navigation(`/SignupPageThird`);
  };
  return (
    <div className=" grid h-screen tablet:grid-cols-5 ">
      <div className=" destop:mx-32 font-figtree  grid items-center justify-center  bg-white text-center tablet:col-span-3 tablet:mx-5 tablet:my-16 tablet:block tablet:justify-start laptop:relative laptop:mx-20 laptop:text-left">
        <div className="laptop:text-left ">
          <img
            src="https://cdn.monday.com/images/logos/logo-full-big.png"
            alt="monday"
            className="inline-block h-6 tablet:h-10"
          />
          <h1 className="pb-4 pt-8 font-popi text-xl font-medium tablet:pt-16 tablet:text-2xl laptop:text-2xl">
            Create your account
          </h1>
          <div className=" grid w-full gap-y-2 text-left font-light tablet:gap-y-4 desktop:w-[80%] ">
            <InputForm
              type="text"
              label={"Full name"}
              labelStyle={" text-sm text-gray-500 tablet:text-base"}
              placeholder={"Enter your full name"}
              inputStyle={
                "w-full rounded border border-solid border-gray-300 px-4 py-3 text-xs  outline-1 outline-blue-500  hover:border-gray-500 tablet:text-lg text-base "
              }
            />
            <InputForm
              type="password"
              label={"Password"}
              labelStyle={" text-sm text-gray-500 tablet:text-base"}
              placeholder={"Enter at least 8 characters"}
              inputStyle={
                "w-full rounded border border-solid border-gray-300 px-4 py-3  outline-1 outline-blue-500  hover:border-gray-500  tablet:text-lg text-base "
              }
            />
            <InputForm
              type="text"
              label={"Account name"}
              labelStyle={" text-sm text-gray-500 tablet:text-base"}
              placeholder={"Company's or department's name"}
              inputStyle={
                "w-full rounded border border-solid border-gray-300 px-4 py-3 outline-1 outline-blue-500  hover:border-gray-500 tablet:text-lg text-base "
              }
            />
          </div>
        </div>
        <div className="pt-8 laptop:absolute laptop:bottom-0 laptop:right-0">
          <BtnContinue
            btnStyle="flex w-full items-center justify-center rounded bg-[#0073ea]	p-4 text-base text-white hover:opacity-30"
            handle={handleContinue}
          />
        </div>
      </div>
      <div className=" hidden  h-full justify-center bg-[#6161ff] tablet:col-span-2 tablet:block">
        <div className="h-full bg-[url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png)] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default CreateAccount;

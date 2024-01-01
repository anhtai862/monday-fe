import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigation = useNavigate();
  const handleContinue = () => {
    navigation(`/CreateAccount`);
  };

  return (
    <div className=" grid h-screen  tablet:grid-cols-5 ">
      <div className=" font-figtree grid items-center justify-center  bg-white px-4 text-center tablet:col-span-3">
        <div className="   tablet:w-[418px] tablet:px-1  ">
          <h1 className="pb-2  font-popi text-xl font-medium tablet:pb-4 tablet:text-2xl laptop:text-3xl">
            Welcome to monday.com
          </h1>
          <p className="pb-8 text-xs tablet:pb-12 tablet:text-sm laptop:text-base">
            Get started - it's free. No credit card needed.
          </p>
          <button className="flex w-full items-center justify-center rounded border border-solid border-gray-300 px-4 py-2 text-xs  hover:bg-[#ccc] tablet:text-sm  laptop:text-base ">
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
              alt="Continue with Google"
              className="mr-2 w-4  "
            />
            <span className="font-normal">Continue with Google</span>
          </button>
          <div className=" my-4 grid grid-cols-7">
            <div className="color col-start-1 col-end-4 h-3/6 w-full self-end border-t border-solid border-gray-300 "></div>
            <div className="col-start-4 col-end-4">Or</div>
            <div className=" color col-start-5 col-end-8  h-3/6 w-full self-end border-t border-solid border-gray-300 "></div>
          </div>
          <input
            type="email"
            className="  w-full rounded border border-solid border-gray-300 px-4 py-2  text-xs font-normal  outline-1 outline-blue-500 hover:border-gray-500 tablet:text-sm laptop:text-base"
            placeholder="name@company.com"
          />
          <button
            onClick={handleContinue}
            className=" mb-6 mt-4 w-full rounded bg-[#0073ea] px-4 py-2 text-xs text-white hover:bg-opacity-30 tablet:text-sm  laptop:text-base "
          >
            Continue
          </button>
          <p className=" text-xs font-normal tablet:text-sm laptop:text-base">
            By proceeding, you agree to the
            <a
              href="https://monday.com/l/fr/le-juridique/tos/"
              className=" mx-1 text-[#1f76c2]"
            >
              Terms of Service
            </a>
            and
            <a
              href="https://monday.com/l/privacy/privacy-policy/"
              className="ml-1 text-[##1f76c2]"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="">
          <p className=" text-center  text-xs tablet:text-sm laptop:text-base ">
            Already have an account?
            <a href="log in" className="ml-1 text-[#1f76c2] ">
              Log in
            </a>
          </p>
        </div>
      </div>
      <div className=" hidden  h-full justify-center bg-[#6161ff] tablet:col-span-2 tablet:block">
        <div className="h-full bg-[url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png)] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default Signup;

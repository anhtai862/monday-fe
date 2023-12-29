import React from "react";

function Signup() {
  return (
    <div className=" font-popi tablet:grid-cols-5 grid h-screen ">
      <div className=" tablet:col-span-3 grid items-center  justify-center bg-white px-4 text-center">
        <div className="  tablet:w-[418px] tablet:px-1  ">
          <h1 className="tablet:pb-4  tablet:text-2xl laptop:text-3xl pb-2 text-xl font-medium">
            Welcome to monday.com
          </h1>
          <p className="tablet:pb-12 laptop:text-base tablet:text-sm pb-8 text-xs">
            Get started - it's free. No credit card needed.
          </p>
          <button className="laptop:text-base tablet:text-sm flex w-full items-center justify-center rounded border border-solid border-gray-300 px-4  py-2 text-xs  hover:bg-[#ccc] ">
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
              alt="Continue with Google"
              className="mr-2 w-4  "
            />
            <span>Continue with Google</span>
          </button>
          <div className=" my-4 grid grid-cols-7">
            <div className="color col-start-1 col-end-4 h-3/6 w-full self-end border-t border-solid border-gray-300 "></div>
            <div className="col-start-4 col-end-4">Or</div>
            <div className=" color col-start-5 col-end-8  h-3/6 w-full self-end border-t border-solid border-gray-300 "></div>
          </div>
          <input
            type="email"
            className="  laptop:text-base tablet:text-sm w-full rounded border border-solid border-gray-300 px-4  py-2 text-xs  outline-1 outline-blue-500 hover:border-gray-500 "
            placeholder="name@company.com"
          />
          <button className="laptop:text-base tablet:text-sm mb-6 mt-4 w-full rounded bg-[#0073ea] px-4 py-2 text-xs  text-white  hover:bg-opacity-30 ">
            Continue
          </button>
          <p className="laptop:text-base tablet:text-sm text-xs ">
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
          <p className=" laptop:text-base tablet:text-sm text-center text-xs ">
            Already have an account?
            <a href="Log in" className="ml-1 text-[#1f76c2]">
              Log in
            </a>
          </p>
        </div>
      </div>
      <div className=" tablet:col-span-2  tablet:block hidden h-full justify-center bg-[#6161ff]">
        <div className="h-full bg-[url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png)] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default Signup;

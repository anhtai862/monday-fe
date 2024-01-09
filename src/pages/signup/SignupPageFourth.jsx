import React from "react";
import { LAST_Q } from "./Data";
import BtnContinue from "../../components/BtnContinue";
import BtnBack from "../../components/BtnBack";
import LayoutRight from "../../components/LayoutRight";

function SignupPageFourth({ setIndex, numberOfPage }) {
  const handleContinue = () => {
    setIndex(4);
  };
  const handleBack = () => {
    setIndex(2);
  };
  return (
    <div className=" box-border grid h-screen font-popi tablet:grid-cols-5 ">
      <div className=" m-6  text-center tablet:col-span-3 tablet:mx-8 tablet:my-6  laptop:mx-20 laptop:my-16 laptop:grid laptop:text-left">
        <img
          src="https://cdn.monday.com/images/logos/logo-full-big.png"
          alt="monday"
          className="m-auto  h-6  laptop:m-0 laptop:mb-16 laptop:w-32"
        />
        <div>
          <h1 className=" mb-3  font-popi font-medium tablet:mb-5 tablet:text-xl laptop:mb-8 laptop:text-2xl ">
            One last question, how did you hear about us?
          </h1>
          <div className="flex  flex-wrap gap-3 font-figtree">
            {LAST_Q.map((quest) => {
              return (
                <label
                  htmlFor={quest}
                  className=" flex items-center justify-center rounded-full border border-gray-300 px-2 py-1 active:scale-95   "
                  key={quest}
                >
                  <input
                    type="checkbox"
                    name={quest}
                    id={quest}
                    className=" mr-2 h-5 w-4 "
                  />
                  <span className="  text-xs font-light tablet:text-base">
                    {quest}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
        <div className=" flex  flex-col items-center gap-3 pt-9   tablet:flex-row tablet:items-end tablet:justify-between">
          <BtnBack handle={handleBack} />

          <BtnContinue handle={handleContinue} />
        </div>
      </div>

      <LayoutRight
        background={"bg-[#ffcc00]"}
        urlll={
          "bg-[url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png)]"
        }
        orderOfPage={numberOfPage}
      />
    </div>
  );
}

export default SignupPageFourth;

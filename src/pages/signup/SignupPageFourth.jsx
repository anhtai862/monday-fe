import React from "react";
import { LAST_Q } from "./Data";
import BtnContinue from "../../components/BtnContinue";
import BtnBack from "../../components/BtnBack";
import { useNavigate } from "react-router-dom";

function SignupPageFourth() {
  const navigation = useNavigate();
  const handleContinue = () => {
    navigation(`/InviteYourTeam`);
  };
  const handleBack = () => {
    navigation(`/SignupPageThird`);
  };
  return (
    <div className=" box-border flex h-screen max-w-full  ">
      <div className="flex max-h-screen flex-col gap-6 px-6 py-8 tablet:basis-3/5  tablet:px-8  tablet:py-16 laptop:px-20 laptop:py-16  desktop:px-32">
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
        <div className=" flex  h-full flex-col items-center justify-end gap-3  tablet:flex-row tablet:items-end tablet:justify-between">
          <BtnBack handle={handleBack} />

          <BtnContinue handle={handleContinue} />
        </div>
      </div>

      <div className=" hidden h-full basis-2/5 items-center justify-center bg-[#ffcc00] bg-contain bg-center bg-no-repeat  tablet:flex ">
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png"
          className="h-screen"
          alt="#"
        />
      </div>
    </div>
  );
}

export default SignupPageFourth;

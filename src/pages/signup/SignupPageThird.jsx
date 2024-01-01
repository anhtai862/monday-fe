import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnContinue from "../../components/BtnContinue";
import { WHAT_BRINGS } from "./Data";

function SignupPageThird() {
  const [job, setJob] = useState();
  const [unNext, setunNext] = useState(true);
  const navigation = useNavigate();
  const handleNext = (stt) => {
    setunNext(stt);
  };

  const handleJob = (detail) => {
    setJob(detail);
    if (detail.length === 0) {
      setunNext(false);
    }
  };
  const handleContinue = () => {
    navigation(`/`);
  };

  return (
    <div className=" grid h-screen font-popi tablet:grid-cols-5">
      <div className=" relative mx-6 text-center tablet:col-span-3 tablet:mx-8 tablet:my-6  laptop:mx-20 laptop:my-16 laptop:grid laptop:text-left">
        <div className="laptop:justify-left">
          <img
            src="https://cdn.monday.com/images/logos/logo-full-big.png"
            alt="monday"
            className="  mx-auto my-8 h-6 laptop:mb-16 laptop:inline-block"
          />

          {/* what Brings */}
          <div className="  items-center justify-center laptop:inline  laptop:items-center laptop:justify-start  ">
            <h1 className=" pb-4 text-base font-normal tablet:text-xl laptop:pb-8 laptop:text-2xl">
              Hey there, what brings you here today?
            </h1>
            <div className="grid grid-cols-2  gap-3 pb-2 laptop:flex laptop:pb-6 ">
              {WHAT_BRINGS.map((bring) => {
                return (
                  <label
                    htmlFor={bring.job}
                    className=" col-span-1 flex  items-center justify-center rounded-full border border-gray-400 px-4 py-2    "
                    key={bring.job}
                  >
                    <input
                      type="radio"
                      name="job"
                      id={bring.job}
                      className=" mr-2 h-5 w-4 "
                      onClick={() => handleJob(bring.details)}
                    />
                    <span className="  text-xs font-light tablet:text-base ">
                      {bring.job}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* best Descritp */}
            {job !== undefined ? (
              <div className="pt-5">
                {job.length > 0 ? (
                  <h1 className="pb-4 text-base font-normal tablet:pb-8 tablet:text-xl ">
                    What best describes your current role?
                  </h1>
                ) : null}

                <div className="flex flex-wrap gap-3 ">
                  {job.map((bestDesc) => {
                    return (
                      <label
                        htmlFor={bestDesc}
                        className=" flex items-center  rounded-full border border-gray-400 px-4 py-2  "
                        key={bestDesc}
                      >
                        <input
                          type="radio"
                          name="desc"
                          id={bestDesc}
                          className=" mr-2 h-5 w-4 "
                          onClick={() => handleNext(false)}
                        />
                        <span className=" text-xs font-light tablet:text-base">
                          {bestDesc}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
          <div className="  w-full pt-9 laptop:absolute laptop:bottom-0 laptop:right-0 laptop:w-32">
            <BtnContinue
              handle={handleContinue}
              disable={unNext}
              btnStyle="flex w-full  justify-center disabled:bg-gray-200 disabled:text-gray-400 font-figtree font-normal items-center rounded bg-[#0073ea] p-4 text-base text-white hover:opacity-30"
            />
          </div>
        </div>
      </div>
      <div className=" hidden  h-full justify-center bg-[#6161ff] tablet:col-span-2 tablet:block">
        <div className="h-full bg-[url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png)] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default SignupPageThird;

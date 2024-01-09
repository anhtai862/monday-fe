import React from "react";
import LayoutRight from "../../components/LayoutRight";

function BoardPage({ setIndex, numberOfPage }) {
  const handleContinue = () => {
    setIndex(6);
  };
  return (
    <div className="grid h-screen grid-flow-row auto-rows-auto px-6 py-8 laptop:p-0 desktop:grid desktop:grid-cols-6">
      <div className="  box-border h-full font-figtree text-sm font-normal tablet:text-sm   laptop:px-8 laptop:py-10 laptop:text-sm 	desktop:col-span-3  desktop:flex  desktop:text-base">
        <div className="desktop:m-auto  desktop:max-w-[440px] ">
          <img
            src="https://cdn.monday.com/images/logos/logo-full-big.png"
            alt="monday"
            className="  mx-auto  mb-8 h-6 laptop:mb-16 laptop:ml-0 laptop:inline-block laptop:h-8 desktop:h-6 "
          />
          <h1 className="font-popi text-base font-semibold laptop:text-xl desktop:pb-6 desktop:text-2xl">
            Let's start working together
          </h1>
          <label
            htmlFor=""
            className="flex flex-col  gap-1 py-3 desktop:pb-12 desktop:text-sm"
          >
            <span>
              Give your board a name, e.g. marketing plan, sales pipeline,
              quarterly roadmap...
            </span>
            <div className="flex  justify-start">
              <input
                type="text"
                name="coppy"
                id=""
                placeholder="My Frist Board"
                className=" w-full rounded border border-gray-400 px-3 py-2 "
              />
            </div>
          </label>
          <div className="w-full rounded bg-gray-200 px-2 py-3 desktop:p-6  ">
            <span className="   text-left text-xs font-light laptop:text-[15px] ">
              In monday.com, "boards" are the place where all your content
              lives.
            </span>
          </div>

          <div className="flex h-full items-start justify-center py-4 laptop:items-start desktop:justify-end desktop:pt-20 ">
            <button
              onClick={handleContinue}
              className="flex w-full items-center  justify-center rounded bg-[#0073ea] px-4 py-2 font-figtree text-sm font-normal text-white hover:opacity-30 disabled:bg-gray-200 disabled:text-gray-400 tablet:text-lg desktop:w-32 desktop:text-base"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <LayoutRight orderOfPage={numberOfPage} />
    </div>
  );
}

export default BoardPage;

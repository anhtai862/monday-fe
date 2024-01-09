import React from "react";
import { RELEVANT_COLUMNS } from "./DataBoard";
import LayoutRight from "../../components/LayoutRight";

function ColumnTable({ setIndex, numberOfPage }) {
  const handleContinue = () => {
    setIndex(7);
  };
  const handleBack = () => {
    setIndex(5);
  };

  return (
    <div className="grid h-screen grid-flow-row auto-rows-auto px-6 py-8 laptop:p-0 desktop:grid desktop:grid-cols-6">
      <div className="   box-border h-full font-figtree text-sm font-normal tablet:text-sm   laptop:px-8 laptop:py-10 laptop:text-sm 	desktop:col-span-3  desktop:flex  desktop:text-base">
        <div className="desktop:m-auto  desktop:max-w-[440px] ">
          <img
            src="https://cdn.monday.com/images/logos/logo-full-big.png"
            alt="monday"
            className="  mx-auto  mb-8 h-6 laptop:mb-16 laptop:ml-0 laptop:inline-block laptop:h-8 desktop:h-6 "
          />
          <div className="">
            <h1 className="font-popi text-base font-medium laptop:text-xl desktop:pb-6 desktop:text-2xl">
              Let's start working together
            </h1>
            <p className="pt-2 text-xs font-light ">
              Choose from the most popular column types for your work
            </p>
          </div>

          <div className="flex flex-wrap justify-start gap-2 py-6">
            {RELEVANT_COLUMNS.map((relevant) => {
              return (
                <div
                  key={relevant.id}
                  className="flex items-center justify-center rounded border border-gray-300   active:border-[#0073ea] "
                >
                  <button className="  inline-flex  items-center justify-center p-2 ">
                    <div className={relevant.style}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={relevant.d}
                        />
                      </svg>
                    </div>
                    <span className="pl-1 text-xs">{relevant.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="w-full rounded bg-gray-200 px-2 py-3 desktop:p-6  ">
            <span className="   text-left text-xs font-light laptop:text-[15px] ">
              Assign accountability to any team member or guest so everyone is
              aligned on what they need to complete.
            </span>
          </div>

          <div className="flex h-full flex-col items-start justify-center gap-2 py-4 tablet:flex-row tablet:justify-around tallTablet:flex-col laptop:items-start desktop:items-center desktop:justify-between desktop:pt-20 ">
            <button
              onClick={handleBack}
              className=" flex w-full items-center justify-center  rounded border border-gray-400 px-4 py-2 font-figtree text-sm font-normal hover:bg-gray-300  tablet:text-base  tallTablet:w-full desktop:max-w-32"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <span>Back</span>
            </button>
            <button
              onClick={handleContinue}
              className="flex h-[42px] w-full items-center  justify-center rounded bg-[#0073ea] px-4 py-2 font-figtree text-sm font-normal text-white hover:opacity-30 disabled:bg-gray-200 disabled:text-gray-400   tablet:text-lg  desktop:w-32 desktop:text-base"
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

export default ColumnTable;

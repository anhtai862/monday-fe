import React from "react";
import LayoutRight from "../../components/LayoutRight";
import { VIEW_OUTLINE } from "./DataBoard";

function ViewBoard({ setIndex, numberOfPage }) {
  const handleContinue = () => {
    setIndex(9);
  };
  const handleBack = () => {
    setIndex(7);
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
              Add a view layout
            </h1>
            <p className="pt-2 text-xs font-light ">
              Transform the way you see and manage your work with more unique
              views. You can always add more late.
            </p>
          </div>

          <div className="flex flex-wrap justify-start gap-2 py-6">
            {VIEW_OUTLINE.map((view) => {
              return (
                <div
                  key={view.id}
                  className="flex items-center justify-center rounded border border-gray-300   active:border-[#0073ea] "
                >
                  <button className="  inline-flex  items-center justify-center p-2 ">
                    <div className={view.style}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox={view.viewBox}
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 stroke-black"
                        height={16}
                        width={16}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={view.d}
                        />
                      </svg>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 stroke-white"
                        viewBox="0 0 512 512"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm96 64H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm160 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                        />
                      </svg> */}
                    </div>
                    <span className="pl-1 text-xs">{view.name}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="w-full rounded bg-gray-200 px-2 py-3 desktop:p-6  ">
            <span className="   text-left text-xs font-light laptop:text-[15px] ">
              Table view is your default layout. Plan, track and manage anything
              using a visual board.
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

export default ViewBoard;

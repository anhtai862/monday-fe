import React from "react";
import { RELEVANT_COLUMNS } from "./DataBoard";

function ColumnTable() {
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
          {/* đang làm ở day */}
          <div className="w-full rounded bg-gray-200 px-2 py-3 desktop:p-6  ">
            <span className="   text-left text-xs font-light laptop:text-[15px] ">
              Assign accountability to any team member or guest so everyone is
              aligned on what they need to complete.
            </span>
          </div>
          {/* đang làm ở day */}

          <div className="flex h-full flex-col items-start justify-center gap-2 py-4 tablet:flex-row tablet:justify-around tallTablet:flex-col laptop:items-start desktop:items-center desktop:justify-between desktop:pt-20 ">
            <button className=" flex w-full items-center justify-center  rounded border border-gray-400 px-4 py-2 font-figtree text-sm font-normal hover:bg-gray-300  tablet:text-base  tallTablet:w-full desktop:max-w-32">
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
            <button className="flex h-[42px] w-full items-center  justify-center rounded bg-[#0073ea] px-4 py-2 font-figtree text-sm font-normal text-white hover:opacity-30 disabled:bg-gray-200 disabled:text-gray-400   tablet:text-lg  desktop:w-32 desktop:text-base">
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
      <div className=" mt-20 box-border   tablet:mt-0 tallTablet:hidden tallLaptopMin:h-full  desktop:col-span-3 desktop:h-screen  desktop:p-[2px]">
        <div className="relative flex h-full items-center rounded-xl bg-[#f6f7fb] tablet:justify-center laptop:justify-center desktop:justify-end  ">
          <button className=" absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded  hover:bg-[#dcdfec] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col   bg-white  py-2 shadow drop-shadow-[-10px_10px_30px_rgba(29,140,242,.3)] desktop:max-w-[860px]">
            <h1 className=" text-center font-popi text-base font-semibold laptop:text-xl desktop:hidden desktop:pt-8">
              Your Name Board
            </h1>
            <div className="my-4 ml-10 mt-8 hidden h-2 w-1/3 rounded bg-[#c3c6d4]  desktop:block">
              {" "}
            </div>

            <div className="flex flex-col desktop:py-16 desktop:pl-8">
              <div className=" grid grid-cols-[170px_minmax(auto,_200px)_minmax(auto,_200px)_minmax(auto,_200px)_auto] items-center   border-gray-200  ">
                {/* table 5/5 top */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start  pr-6 ">
                  <div className="h-[6px] w-3/4 rounded bg-[#579bfc]"> </div>
                </div>
                {/* 1 */}
                <div className=" col-[1/_auto] flex h-9 w-full items-center justify-start rounded-tl-[10px] border border-l-[6px] border-l-[#579bfc] px-6  ">
                  <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
                </div>

                <div className="col-[2_/_auto] flex h-9 w-full items-center justify-center  border-y  ">
                  <div className=" m-auto flex h-1 w-full items-center justify-center">
                    <span>Due date </span>
                  </div>
                </div>
                <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border ">
                  <div className=" m-auto flex h-1 w-full items-center justify-center ">
                    <span>Status</span>
                  </div>
                </div>
                <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y ">
                  <div className=" h-1 w-1/3 rounded bg-gray-300"> </div>
                </div>

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" mx-3 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                {/* 2 */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start border border-l-[6px] border-l-[#579bfc] px-6 ">
                  <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
                </div>

                <div className="col-[2_/_auto] flex h-9 w-full  items-center justify-center border-y bg-[#e0394e]  text-sm tablet:bg-white ">
                  <div className=" m-auto flex h-1 w-full items-center justify-center  text-center tablet:relative ">
                    <div className="left-0 hidden w-full justify-start pl-1 tablet:absolute tablet:flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" h-6 w-6	rounded-full  bg-[#e0394e] stroke-white "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                      </svg>
                    </div>

                    <span className=" w-full">3 Jan </span>
                  </div>
                </div>
                <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border ">
                  <div className=" m-auto flex h-1 w-full items-center justify-center text-xs tablet:text-sm ">
                    <span>Action items </span>
                  </div>
                </div>

                <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y ">
                  <div className=" h-1 w-1/3 rounded bg-gray-300"> </div>
                </div>

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border "></div>
                {/* 3 */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start border border-l-[6px] border-l-[#579bfc] px-6 ">
                  <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
                </div>

                <div className="col-[2_/_auto] flex h-9 w-full items-center  justify-center border-y bg-green-600 text-center tablet:relative tablet:bg-white">
                  <div className=" m-auto flex h-1 w-full items-center justify-center ">
                    <div className="left-0 hidden w-full justify-start pl-1 tablet:absolute tablet:flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" h-6 w-6	rounded-full  bg-green-600 stroke-white "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>

                    <span className=" w-full   line-through ">4 Jan</span>
                  </div>
                </div>
                <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border ">
                  <div className=" m-auto flex h-1 w-full items-center justify-center text-xs tablet:text-sm ">
                    <span>Meeting notes </span>
                  </div>
                </div>
                <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y ">
                  <div className=" h-1 w-1/3 rounded bg-gray-300"> </div>
                </div>

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border "></div>
                {/* 4 */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start border border-l-[6px] border-l-[#579bfc] px-6 ">
                  <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
                </div>

                <div className="col-[2_/_auto] flex h-9 w-full  items-center justify-center border-y bg-[#666] text-center  text-sm tablet:bg-white">
                  <div className=" m-auto flex h-1 w-full items-center justify-center tablet:relative">
                    <div className="left-0 hidden w-full justify-start pl-1 tablet:absolute   tablet:flex ">
                      <div className=" h-6 w-6 rounded-full bg-[#666] "> </div>
                    </div>

                    <span className=" w-full">5 Jan </span>
                  </div>
                </div>
                <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border ">
                  <div className=" m-auto flex h-1 w-full items-center justify-center text-xs tablet:text-sm ">
                    <span>Other </span>
                  </div>
                </div>
                <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y ">
                  <div className=" h-1 w-1/3 rounded bg-gray-300"> </div>
                </div>

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border "></div>
                {/* 5 */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start rounded-bl-[10px] border border-l-[6px] border-l-[#579bfc] px-6 opacity-[0.5] ">
                  <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
                </div>

                <div className="col-[2/_auto] flex h-9 w-full  items-center justify-center border-y "></div>
                <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border-y "></div>
                <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y "></div>

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border-y "></div>

                {/* table bottom */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start  pr-6 ">
                  <div className="h-[6px] w-3/4 rounded bg-[#00c875]"> </div>
                </div>
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start rounded-tl-[10px]  border border-l-[6px] border-l-[#00c875] px-6 ">
                  <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
                </div>

                <div className="col-[2_/_auto] flex h-9 w-full  items-center justify-center border-y ">
                  <div className=" h-1 w-1/3 rounded bg-gray-300"> </div>
                </div>
                <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border ">
                  <div className=" h-1 w-1/3 rounded bg-gray-300"> </div>
                </div>
                <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y ">
                  <div className=" h-1 w-1/3 rounded bg-gray-300"> </div>
                </div>

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className="  col-span-1 flex h-9 w-full items-center justify-start rounded-bl-[10px]  border-y border-l-[6px] border-l-[#00c875] px-6 opacity-[0.5] ">
                  <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
                </div>

                <div className="col-[2/_auto] flex h-9 w-full  items-center justify-center border-y "></div>
                <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border-y "></div>
                <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y "></div>

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border-y "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColumnTable;

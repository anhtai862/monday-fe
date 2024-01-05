import React from "react";

function BoardPage() {
  return (
    <div className="grid h-screen grid-rows-6 px-6 py-8 laptop:p-0 desktop:grid desktop:grid-cols-6">
      <div className="  tallLaptopMin:row-span-2 row-span-3 box-border h-screen font-figtree  text-sm font-normal  tablet:row-span-3 tablet:text-sm laptop:px-8 laptop:py-10 laptop:text-sm	desktop:col-span-3  desktop:flex  desktop:text-base">
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
            <button className="flex w-full items-center  justify-center rounded bg-[#0073ea] px-4 py-2 font-figtree text-sm font-normal text-white hover:opacity-30 disabled:bg-gray-200 disabled:text-gray-400 tablet:text-lg desktop:w-32 desktop:text-base">
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
      <div className=" tallTablet:hidden tallLaptopMin:h-full row-span-3 mt-20  box-border bg-yellow-200 tablet:mt-0  desktop:col-span-3 desktop:h-screen  desktop:p-[2px]">
        <div className="mx-auto flex h-full items-center rounded-xl bg-[#f6f7fb] tablet:justify-center laptop:justify-center desktop:justify-end  ">
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
                {/* 2 */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start border border-l-[6px] border-l-[#579bfc] px-6 ">
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

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border "></div>
                {/* 3 */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start border border-l-[6px] border-l-[#579bfc] px-6 ">
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

                <div className="  col-[5/_auto] flex h-9 w-full items-center justify-center border "></div>
                {/* 4 */}
                <div className="  col-[1/_auto] flex h-9 w-full items-center justify-start border border-l-[6px] border-l-[#579bfc] px-6 ">
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

export default BoardPage;

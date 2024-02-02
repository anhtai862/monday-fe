import React from "react";
import mytask from "../../../assets/images/iconHeader/mytask.png";
import ellipsis from "../../../assets/images/iconHeader/ellipsis.png";
import search from "../../../assets/images/iconHeader/search.png";
import customize from "../../../assets/images/iconHeader/customize.png";
import arrowright from "../../../assets/images/iconHeader/arrowright.png";
import namecell from "../../../assets/images/iconHeader/namecell.png";
import plus from "../../../assets/images/iconHeader/plus.png";

function MyworkDashBoard() {
  const handlemodal = () => {
    console.log("hihi");
  };
  return (
    <div className="flex h-full w-full flex-col bg-[#181b34] px-3 laptop:rounded-tl-lg laptop:px-0">
      {/* laptop header screen */}
      <div className="hidden laptop:block">
        <div className="flex w-full items-center justify-between border-b-2 border-hoverDarkmode  px-[30px] py-[30px]">
          <h1 className="text-4xl font-bold">My Work</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className=" flex gap-2 pb-[48px] pl-[30px] pt-[30px] text-sm ">
          <button className=" rounded bg-[#0073ea] px-2 py-2 text-white  hover:bg-[#0060b9]">
            New item
          </button>
          <div className="box-border flex min-h-8 items-center justify-center gap-1 rounded border border-[#4b4e69] bg-[#30324e] pl-4 pr-1 font-normal hover:border-[#0060b9] desktop:min-w-[120px] ">
            <input
              type="text"
              name="search"
              className="w-full border-none bg-transparent text-whiteDarkmode outline-none"
              placeholder="Search"
            />
            <button className="rounded p-1 hover:bg-hoverDarkmode">
              <img src={search} alt="" className="h-5 w-5  " />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 rounded px-2 py-1 hover:bg-hoverDarkmode">
            <input
              type="checkbox"
              name="hide done items"
              className="h-4 w-4"
              id=""
            />
            <span>Hide done items</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded px-2 py-1 hover:bg-hoverDarkmode">
            <img src={customize} alt="" />
            <span>Customize</span>
          </div>
        </div>
      </div>
      {/* laptop screen */}

      <div className="flex items-center justify-between gap-1 text-sm tablet:justify-start tablet:gap-3 tablet:text-base laptop:hidden laptop:text-lg  ">
        <div className="rounded-lg  bg-hoverDarkmode p-1 ">
          <span>Hide done items</span>
        </div>

        <div className="flex items-center justify-start gap-1 rounded-lg bg-hoverDarkmode p-1   ">
          <img src={mytask} alt="" className="h-4 w-4 tablet:h-6 tablet:w-6 " />

          <span> Boards (1)</span>
        </div>
        <div className="flex items-center justify-start gap-1 rounded-lg bg-hoverDarkmode p-1   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 tablet:h-6 tablet:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>

          <span> Following (1)</span>
        </div>
      </div>
      <div className="flex flex-row gap-2 overflow-y-auto pb-6 pt-4 laptop:flex-col laptop:gap-8 laptop:pb-10 laptop:pl-10  ">
        <div className="flex min-w-[90px] flex-col items-start justify-start   gap-1 rounded-lg bg-hoverDarkmode px-2 pt-2  hover:border hover:border-[#0073ea] tablet:w-full laptop:flex-row laptop:items-center laptop:justify-start laptop:bg-transparent laptop:px-1 laptop:py-[6px] laptop:hover:border-none">
          <span className="text-2xl font-semibold laptop:hidden">1</span>
          <button className="hidden laptop:block">
            <img src={arrowright} alt="" className="h-[22px] w-[22px]" />
          </button>
          <span className=" ml-3 text-sm font-extralight tablet:text-base  laptop:text-lg laptop:font-bold">
            Past Dates / <span className="text-base font-light">1 item</span>
          </span>
        </div>

        {/* Today */}
        <div className="flex min-w-[90px] flex-col items-start justify-start   gap-1 rounded-lg bg-hoverDarkmode px-2 pt-2  hover:border hover:border-[#0073ea] tablet:w-full laptop:flex-row laptop:items-center laptop:justify-between laptop:bg-transparent laptop:px-1 laptop:py-[6px] laptop:hover:border-none">
          <div className="laptop:flex laptop:items-center laptop:justify-start">
            <span className="text-2xl font-semibold laptop:hidden">1</span>
            <button className="hidden laptop:block">
              <img src={arrowright} alt="" className="h-[22px] w-[22px]" />
            </button>
            <span className=" ml-3 text-sm font-extralight tablet:text-base  laptop:text-lg laptop:font-bold">
              Today / <span className="text-base font-light">1 item</span>
            </span>
          </div>
          <div className="flex basis-[930px] items-center justify-center text-center text-sm">
            <span className="w-[180px]"> Group</span>
            <span className="w-[210px]"> Board</span>
            <span className="w-[120px]"> People</span>
            <span className="w-[140px]"> Date</span>
            <span className="w-[140px]"> Status</span>
            <span className="w-[140px]"> Priority</span>
          </div>
        </div>
        {/* table my work */}
        <div className=" hidden flex-col text-sm laptop:flex  ">
          <div className="  grid grid-cols-[minmax(auto,_603px)_minmax(auto,_65px)_minmax(auto,_180px)_minmax(auto,_210px)_minmax(auto,_120px)_minmax(auto,_140px)_minmax(auto,_140px)_minmax(auto,_140px)]  items-center  hover:cursor-pointer    ">
            {/* 1 */}
            <div className=" col-[1/_auto] flex h-9 w-full items-center justify-start rounded-tl-[10px] border border-l-[6px] border-hoverDarkmode border-l-[#0073ea]  bg-[#30324e]  px-6    ">
              <span className="w-full rounded ">Name Your Task</span>
            </div>

            <div className="col-[2_/_auto] flex h-9 w-full items-center justify-center border-y border-hoverDarkmode bg-[#30324e]  ">
              <img src={namecell} alt="" className="h-[22px] w-[22px]" />
            </div>
            <div className=" col-[3/_auto] flex h-9 w-full items-center justify-around  border border-hoverDarkmode bg-[#30324e]  ">
              <div className=" relative m-auto flex h-1 w-full items-center  justify-center text-center ">
                <div className="absolute left-0 flex w-full justify-start pl-4 ">
                  <div className=" h-2 w-2 rounded bg-[#579bfc]"> </div>
                </div>

                <span className=" w-full">This month </span>
              </div>
            </div>
            <div className="col-[4/_auto] flex h-9 w-full items-center  justify-center border-y border-hoverDarkmode bg-[#30324e]  ">
              <span>sssss</span>
            </div>

            <div className="col-[5/_auto]  flex h-9 w-full items-center justify-center border border-hoverDarkmode bg-[#30324e]  ">
              <div className=" flex  cursor-pointer items-center justify-center   hover:bg-opacity-100">
                <span className="h-6 w-6 rounded-full bg-[#a457d1] text-center leading-6">
                  D
                </span>
              </div>
            </div>
            <div className="col-[6/_auto] flex h-9 w-full items-center  justify-center border-y border-hoverDarkmode bg-[#30324e]  ">
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
            <div className="col-[7/_auto] flex h-9 w-full items-center justify-center border-y  border-hoverDarkmode   bg-[#797e93] hover:bg-opacity-75">
              <span> Not Status</span>
            </div>
            <div className="col-[8/_auto] flex h-9 w-full items-center  justify-center border-y border-hoverDarkmode bg-[#30324e] ">
              <div className="h-1 w-3/4 rounded bg-gray-300"> </div>
            </div>
            {/* 2 */}
          </div>
          <div className=" top-[76px] grid grid-cols-[minmax(auto,_603px)_minmax(auto,_65px)_minmax(auto,_180px)_minmax(auto,_210px)_minmax(auto,_120px)_minmax(auto,_140px)_minmax(auto,_140px)_minmax(auto,_140px)] items-center  hover:cursor-pointer  ">
            <button
              onClick={handlemodal}
              className="  col-[1/_auto] flex h-9 w-full items-center justify-start rounded-bl-[10px] border border-l-[6px] border-r-0 border-hoverDarkmode border-l-[#579bfc] bg-[#30324e] px-6 "
            >
              <img src={plus} alt="" />
              <span>Add Item</span>
            </button>
            <div className="col-[2/_auto] flex h-9 w-full  items-center justify-center border-y border-hoverDarkmode bg-[#30324e] "></div>
            <div className="  col-[3/_auto] flex h-9 w-full  items-center justify-center border-y border-hoverDarkmode bg-[#30324e] "></div>
            <div className="col-[4/_auto] flex h-9 w-full  items-center justify-center border-y border-hoverDarkmode bg-[#30324e] "></div>

            <div className=" col-[5/_auto] flex h-9 w-full items-center justify-center border-y border-hoverDarkmode bg-[#30324e] "></div>
            <div className=" col-[6/_auto]  flex h-9 w-full items-center justify-center border-y border-hoverDarkmode bg-[#30324e] "></div>
            <div className=" col-[7/_auto] flex h-9 w-full items-center justify-center border-y border-hoverDarkmode bg-[#30324e] "></div>
            <div className=" col-[8/_auto] flex h-9 w-full items-center justify-center border-y border-hoverDarkmode bg-[#30324e] "></div>
          </div>
        </div>
        {/* This Week */}
        <div className="flex min-w-[90px] flex-col items-start justify-start   gap-1 rounded-lg bg-hoverDarkmode px-2 pt-2  hover:border hover:border-[#0073ea] tablet:w-full laptop:flex-row laptop:items-center laptop:justify-start laptop:bg-transparent laptop:px-1 laptop:py-[6px] laptop:hover:border-none">
          <span className="text-2xl font-semibold laptop:hidden">1</span>
          <button className="hidden laptop:block">
            <img src={arrowright} alt="" className="h-[22px] w-[22px]" />
          </button>
          <span className=" ml-3 text-sm font-extralight tablet:text-base  laptop:text-lg laptop:font-bold">
            This Week / <span className="text-base font-light">0 item</span>
          </span>
        </div>
        {/* Next Week */}
        <div className="flex min-w-[90px] flex-col items-start justify-start   gap-1 rounded-lg bg-hoverDarkmode px-2 pt-2  hover:border hover:border-[#0073ea] tablet:w-full laptop:flex-row laptop:items-center laptop:justify-start laptop:bg-transparent laptop:px-1 laptop:py-[6px] laptop:hover:border-none">
          <span className="text-2xl font-semibold laptop:hidden">1</span>
          <button className="hidden laptop:block">
            <img src={arrowright} alt="" className="h-[22px] w-[22px]" />
          </button>
          <span className=" ml-3 text-sm font-extralight tablet:text-base  laptop:text-lg laptop:font-bold">
            Next Week / <span className="text-base font-light">0 item</span>
          </span>
        </div>
        {/* Later */}
        <div className="flex min-w-[90px] flex-col items-start justify-start   gap-1 rounded-lg bg-hoverDarkmode px-2 pt-2  hover:border hover:border-[#0073ea] tablet:w-full laptop:flex-row laptop:items-center laptop:justify-start laptop:bg-transparent laptop:px-1 laptop:py-[6px] laptop:hover:border-none">
          <span className="text-2xl font-semibold laptop:hidden">1</span>
          <button className="hidden laptop:block">
            <img src={arrowright} alt="" className="h-[22px] w-[22px]" />
          </button>
          <span className=" ml-3 text-sm font-extralight tablet:text-base  laptop:text-lg laptop:font-bold">
            Later / <span className="text-base font-light">0 item</span>
          </span>
        </div>
        {/* without a date */}
        <div className="flex min-w-[90px] flex-col items-start justify-start   gap-1 rounded-lg bg-hoverDarkmode px-2 pt-2  hover:border hover:border-[#0073ea] tablet:w-full laptop:flex-row laptop:items-center laptop:justify-start laptop:bg-transparent laptop:px-1 laptop:py-[6px] laptop:hover:border-none">
          <span className="text-2xl font-semibold laptop:hidden">1</span>
          <button className="hidden laptop:block">
            <img src={arrowright} alt="" className="h-[22px] w-[22px]" />
          </button>
          <span className=" ml-3 text-sm font-extralight tablet:text-base  laptop:text-lg laptop:font-bold">
            Without a date /{" "}
            <span className="text-base font-light">0 item</span>
          </span>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between  rounded-lg bg-hoverDarkmode px-2 text-base tablet:text-lg laptop:hidden laptop:text-xl">
        <div className="h-6 w-1 rounded bg-[#0073ea]"> </div>
        <div className="flex w-full items-center justify-start pl-2">
          <span> Name Task</span>
        </div>
        <button className=" flex h-8 w-8 items-center justify-center  tablet:h-10 tablet:w-10">
          <img
            src={ellipsis}
            alt="Notifications"
            className="h-5 w-5 tablet:h-6 tablet:w-6"
          />
        </button>
      </div>
    </div>
  );
}

export default MyworkDashBoard;

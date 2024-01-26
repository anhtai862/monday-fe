import React from "react";
import home from "../../assets/images/iconHeader/home.png";
import home2 from "../../assets/images/iconHeader/home2.png";

import mywork from "../../assets/images/iconHeader/mywork.png";

import arrowdown from "../../assets/images/iconHeader/arrowdown.png";
import ellipsis from "../../assets/images/iconHeader/ellipsis.png";
import plus from "../../assets/images/iconHeader/plus.png";
import search from "../../assets/images/iconHeader/search.png";
import filter from "../../assets/images/iconHeader/filter.png";
import mytask from "../../assets/images/iconHeader/mytask.png";

function SubNav({ setIndex }) {
  return (
    <div className="hidden h-full max-w-[255px] rounded-tr-lg bg-[#181b34] desktop:block">
      {/* first part */}
      <div className="w-full border-b-[1px] border-hoverDarkmode py-3 pl-3 pr-10">
        <button
          onClick={() => {
            setIndex("home");
          }}
          className="flex  cursor-pointer items-center justify-start gap-2 rounded px-[6px] py-2 hover:bg-hoverDarkmode  "
        >
          <img src={home} alt="" className="h-5 w-5 " />
          <span className="text-sm ">Home</span>
        </button>
        <button
          onClick={() => {
            setIndex("mywork");
          }}
          className="flex cursor-pointer items-center justify-start gap-2  rounded px-[6px] py-2 hover:bg-hoverDarkmode "
        >
          <img src={mywork} alt="" className="h-5 w-5 " />
          <span className="text-sm ">My work</span>
        </button>
      </div>
      {/* second part */}
      <div className=" flex w-full flex-col gap-3 py-3 pl-2 pr-4">
        <div className="flex  cursor-pointer items-center justify-between gap-2  px-[6px]    ">
          <div className=" flex items-center justify-center gap-2 rounded p-1 hover:bg-hoverDarkmode ">
            <div className="relative   ">
              <span className=" rounded bg-[#e2445c] p-1  text-center text-sm leading-5">
                M
              </span>
              <img
                src={home2}
                alt=""
                className="absolute -bottom-1 -right-[6px] h-4 w-4 "
              />
            </div>
            <span className="text-base font-semibold">Main workspace</span>
            <img src={arrowdown} alt="" className="h-5 w-5 " />
          </div>

          <div className="cursor-pointer rounded  p-1 hover:bg-hoverDarkmode ">
            <img src={ellipsis} alt="" className="h-5 w-5 " />
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center justify-center gap-3">
          <div className="box-border flex min-h-8 items-center justify-center gap-1 rounded border border-[#4b4e69] pl-[6px] pr-1 font-normal focus:border-[#0060b9] desktop:min-w-[120px] ">
            <div className="">
              <img src={search} alt="" className="h-5 w-5  " />
            </div>

            <input
              type="text"
              name="search"
              className="w-full border-none bg-transparent text-whiteDarkmode outline-none"
              placeholder="Search"
            />

            <button>
              <img src={filter} alt="" className="h-5 w-5 " />
            </button>
          </div>
          <div className="">
            <button className="  rounded bg-[#0073ea] leading-8  hover:bg-[#0060b9] desktop:h-8 desktop:w-8">
              <img src={plus} alt="" className="m-auto h-5 w-5 " />
            </button>
          </div>
        </div>
      </div>
      {/* My task */}
      <div className="flex w-full  cursor-pointer items-center justify-between rounded py-2 pl-3 pr-4 hover:bg-hoverDarkmode ">
        <div className="flex  items-center justify-start gap-2   ">
          <img src={mytask} alt="" className="h-5 w-5 " />
          <span className="text-sm ">My Task</span>
        </div>
        <div className="   pr-[6px] ">
          <img src={ellipsis} alt="" className="h-5 w-5  " />
        </div>
      </div>
    </div>
  );
}

export default SubNav;

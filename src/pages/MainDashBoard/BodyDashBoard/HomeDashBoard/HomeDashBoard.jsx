import React from "react";
import bgheader from "../../../../assets/images/iconHeader/bgheader.png";
import MainPanel from "./MainPanel";
import RightPanel from "./RightPanel";

function HomeDashBoard() {
  return (
    <div className=" h-screen w-full bg-[#1c1f3b] desktop:rounded-tl-lg ">
      {/* homepage header */}
      <div className="hidden items-center justify-between  border-b border-hoverDarkmode desktop:flex desktop:h-[75px] desktop:w-full desktop:px-[80px]">
        {/* header container */}
        <div className=" flex h-full  ">
          <div className="flex flex-col items-start justify-center desktop:mr-3">
            <span className="text-sm">Good afternoon, Dsadasd!</span>
            <span className="text-base">
              Quickly access your recent boards, Inbox and workspaces
            </span>
          </div>
          <div className=" inline overflow-hidden ">
            <img src={bgheader} alt="#" className=" w-full" />
          </div>
        </div>
        {/* button container */}

        <div className="flex items-center justify-center">
          <button className="flex cursor-pointer items-center justify-center  hover:text-[#0073ea]  desktop:px-5">
            <div className="pr-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className=" fill-current  "
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </div>
            <span className="text-[15px]">Give feedback</span>
          </button>

          <button className=" flex items-center justify-center gap-1 rounded bg-[#0073ea]  px-4 py-2 text-white hover:bg-[#0060b9] ">
            <span className="text-base">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </span>
            Quick Search
          </button>
        </div>
      </div>
      {/* content body */}
      <div className="flex laptop:px-[20px] desktop:gap-6 desktop:px-[80px] desktop:pt-4 ">
        {/* main panel header */}
        <MainPanel />
        {/* right panel header */}
        <RightPanel />
      </div>
    </div>
  );
}

export default HomeDashBoard;

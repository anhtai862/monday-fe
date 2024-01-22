import React from "react";
import arrowdown from "../../../assets/images/iconHeader/arrowdown.png";
import recently from "../../../assets/images/iconHeader/recently.png";
import favorite from "../../../assets/images/iconHeader/favorite.png";
import mytask from "../../../assets/images/iconHeader/mytask.png";
import logo from "../../../assets/images/iconHeader/logo.png";
import oclock from "../../../assets/images/iconHeader/oclock.png";
import note from "../../../assets/images/iconHeader/note.png";
import home2 from "../../../assets/images/iconHeader/home2.png";

function MainPanel() {
  return (
    <div className="gap-2desktop:max-w-[1160px] flex h-full w-full flex-col items-center  gap-3 px-4  py-2 desktop:items-start desktop:gap-10 desktop:rounded-lg desktop:bg-[#30324e] desktop:p-6">
      {/*Recently*/}

      <div className=" w-full  rounded-lg border border-hoverDarkmode bg-[#30324e] p-2 hover:border-transparent hover:shadow-card  desktop:gap-0 desktop:border-none desktop:bg-transparent desktop:shadow-none ">
        <div className="flex items-center justify-start  desktop:pb-4">
          <img
            src={arrowdown}
            alt=""
            className="h-6 w-6 tablet:h-8 tablet:w-8"
          />
          <h1 className="font-semibold tablet:text-base desktop:text-lg">
            Recently visited
          </h1>
        </div>

        <div className="flex  flex-row items-center justify-between gap-2 rounded border-hoverDarkmode p-2  hover:border-transparent  desktop:block  desktop:max-w-[270px] desktop:gap-0 desktop:border desktop:hover:shadow-card">
          <img
            alt="example"
            src={recently}
            className="h-10 w-10 rounded-lg tablet:h-16 tablet:w-16 desktop:min-h-[140px] desktop:w-full desktop:rounded "
          />

          <div className=" flex w-full flex-col items-start justify-center gap-1 desktop:gap-0">
            <div className="flex w-full items-center justify-between desktop:py-4">
              <img
                src={mytask}
                alt=""
                className="h-4 w-4  tablet:h-6 tablet:w-6"
              />
              <div className="w-full pl-1 text-xs tablet:text-base ">
                <span>Name Your Board</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <img
                src={logo}
                alt=""
                className="h-4 w-4   tablet:h-6 tablet:w-6"
              />

              <span className="flex items-center justify-center text-xs text-[#9699a6] tablet:text-sm">
                {" "}
                management{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                Main workspace
              </span>
            </div>
          </div>
          <img
            src={favorite}
            alt=""
            className="h-4 w-4 tablet:h-8 tablet:w-8"
          />
        </div>
      </div>
      {/* Update feed */}
      <div className="   w-full ">
        <div className="flex items-center justify-start gap-2 pb-2  desktop:pb-4">
          <img
            src={arrowdown}
            alt=""
            className="h-6 w-6  tablet:h-8 tablet:w-8"
          />
          <h1 className="font-semibold tablet:text-base desktop:text-lg">
            Update feed (Inbox)
          </h1>
          <div className=" h-6 w-6 rounded-full bg-[#0073ea] text-center">
            <span className="m-auto text-sm leading-6">1</span>
          </div>
        </div>
        <div className="flex w-full flex-col  rounded-lg border border-hoverDarkmode px-4 py-2  tablet:px-6 tablet:py-4 desktop:p-4">
          <div className="flex cursor-pointer items-center justify-between rounded pb-2 hover:bg-hoverDarkmode tablet:pb-4 desktop:min-h-[72px] desktop:gap-3 desktop:px-8">
            <img
              src="https://cdn.monday.com/images/damann.jpg"
              alt="avt"
              className="h-[40px] w-[40px] rounded-full tablet:h-16 tablet:w-16"
            />
            <div className="flex w-full flex-col pl-2 text-[15px]">
              <span>Roy Mann</span>
              <span>
                Hi <span className="text-[#0073ea]">@dasdasd</span>,
              </span>
            </div>
            <div className="flex items-center justify-center text-[15px]">
              <img
                src={oclock}
                alt=""
                className="h-4 w-4 tablet:h-6 tablet:w-6"
              />

              <span>5d</span>
            </div>
          </div>
          <div className="border-b border-hoverDarkmode desktop:mb-4 "></div>
          <div className="flex min-h-[72px] w-full flex-col items-center justify-between gap-3 py-3   tablet:flex-row tablet:py-0 desktop:bg-[#33354b] desktop:pl-5 desktop:pr-[30px]">
            <div className="flex items-center justify-center ">
              <div className=" -mr-1 h-[38px] w-[38px] rounded-full bg-[#a457d1] text-center text-white ">
                <span className="m-auto text-2xl font-bold leading-[38px]">
                  D
                </span>
              </div>

              <div className="-mx-1 flex h-[38px]  w-[38px] rounded-full bg-black ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 448 512"
                  className=" m-auto fill-white  leading-[38px] "
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <div className="-ml-1 h-[38px] w-[38px] rounded-full bg-[#0073ea] text-center text-white ">
                <span className="m-auto text-[40px] font-light leading-[38px]">
                  +
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-center text-center tablet:justify-start ">
              <span className=" text-base font-medium">
                Invite your teammates and start collaborating
              </span>
            </div>
            <div className="flex items-center justify-end gap-6">
              <button className="flex  items-center justify-center gap-1 rounded  px-2  py-1 text-sm  hover:bg-hoverDarkmode ">
                No thanks
              </button>
              <button className=" flex items-center justify-center gap-1 rounded bg-[#0073ea] px-2  py-1 text-sm text-white hover:bg-[#0060b9] ">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* My workspaces */}
      <div className=" w-full  desktop:pb-7  ">
        <div className="flex items-center justify-start gap-2 pb-2 desktop:pb-4">
          <img
            src={arrowdown}
            alt=""
            className="h-6 w-6 tablet:h-8 tablet:w-8"
          />
          <h1 className="font-semibold tablet:text-base desktop:text-lg">
            My workspaces
          </h1>
          <img src={note} alt="" className="h-6 w-6 " />
        </div>
        {/* .... */}
        <div className=" flex w-full items-center  justify-start gap-[14px] rounded-lg border border-hoverDarkmode px-4 py-2 hover:cursor-pointer hover:border-transparent hover:shadow-card tablet:px-6 tablet:py-4 desktop:min-h-[88px] desktop:w-1/2  desktop:px-5 desktop:py-0  ">
          <div className="relative h-[48px] w-[48px] rounded-lg bg-[#e2445c] text-center  ">
            <span className=" text-2xl leading-[48px] text-white">M</span>
            <img
              src={home2}
              alt=""
              className="absolute -bottom-1 -right-[6px] h-5 w-5 "
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-lg font-semibold">Main workspace</span>
            <div className="flex items-center justify-center gap-2">
              <img src={logo} alt="" className="h-5 w-5" />

              <span className="flex items-center justify-center text-base font-semibold">
                work management
              </span>
            </div>
          </div>
        </div>
        {/* .... */}
      </div>
    </div>
  );
}

export default MainPanel;

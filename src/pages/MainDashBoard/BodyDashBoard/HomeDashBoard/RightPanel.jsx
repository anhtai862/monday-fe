import React from "react";
import getting from "../../../../assets/images/iconHeader/getting.png";
import helpcenter from "../../../../assets/images/iconHeader/helpcenter.png";

function RightPanel() {
  return (
    <div className="hidden w-full desktop:flex desktop:max-w-[300px] desktop:flex-col desktop:gap-4">
      {/* user guildence */}
      <div className="  relative rounded-lg bg-[#30324e] shadow-[0px_3px_12px_#4b4e69] desktop:px-[30px] desktop:py-[15px]">
        <div>
          <span className="text-lg">Complete Your Profile</span>
          {/* close table */}
          <div className="absolute right-2 top-2">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="  border-b border-hoverDarkmode text-[15px] ">
          <ul className="flex flex-col items-start justify-center desktop:py-[10px]">
            <li className="flex items-center justify-center gap-2 text-[#00c875]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="13"
                viewBox="0 0 512 512"
                className="fill-current "
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              Setup Account
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                width="15"
                viewBox="0 0 512 512"
                className="fill-[#aaa]"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>

              <span>Upload Your Photo</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                width="15"
                viewBox="0 0 512 512"
                className="fill-[#aaa]"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>

              <span>Enable Desktop Notifications</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-[#00c875]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="13"
                viewBox="0 0 512 512"
                className="fill-current "
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <span>Invite Team Members</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                width="15"
                viewBox="0 0 512 512"
                className="fill-[#aaa]"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>

              <span>Complete Profile</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="13"
                width="15"
                viewBox="0 0 512 512"
                className="fill-[#aaa]"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>

              <span>Install Our Mobile App</span>
            </li>
          </ul>
        </div>
        {/* Battery */}
        <div className="desktop:pt-4">
          <div className="flex h-[18px] flex-col overflow-hidden rounded-full bg-white ">
            <div className="h-[9px]  w-2/6 bg-[#f65f7c]"></div>
            <div className="h-[9px]  w-2/6 bg-[#e2445c]"></div>
          </div>
        </div>
      </div>
      {/* bottom panel */}
      <div className="flex flex-col rounded-lg bg-[#30324e] text-base desktop:gap-3 desktop:p-3 ">
        <img
          src="https://cdn.monday.com/images/homepage-desktop/templates-banner.png"
          alt="templateItems"
        />
        <span>Boost your workflow in minutes with ready-made templates</span>

        <button className="w-full rounded border border-hoverDarkmode hover:bg-hoverDarkmode desktop:px-4 desktop:py-2">
          Explore templates
        </button>
      </div>
      <div className="flex flex-col desktop:gap-4 desktop:pt-2">
        <h2 className="text-base font-semibold">Learn & get inspired</h2>
        <div className="flex items-center justify-start gap-[15px] rounded-lg bg-[#30324e] desktop:p-4">
          <img
            src={getting}
            alt="getting started"
            className="h-[48px] w-[48px]"
          />
          <div className="flex flex-col items-start justify-center text-sm">
            <span className="font-bold">Getting started</span>
            <span className="font-light">Learn how monday.com works</span>
          </div>
        </div>
        <div className="flex items-center justify-start gap-[15px] rounded-lg bg-[#30324e] desktop:p-4">
          <img
            src={helpcenter}
            alt="getting started"
            className="h-[48px] w-[48px]"
          />
          <div className="flex flex-col items-start justify-center text-sm">
            <span className="font-bold">Help center</span>
            <span className="font-light">Learn and get support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;

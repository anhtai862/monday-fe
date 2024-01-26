import React from "react";
import invite from "../../../assets/images/iconHeader/invite.png";
import search from "../../../assets/images/iconHeader/search.png";

function HeaderHomeMobile() {
  return (
    <div className="fixed left-0 right-0 top-0 flex items-center justify-between bg-[#1c1f3b] px-4  py-2 tablet:px-6  tablet:py-4 desktop:hidden">
      <img
        src="https://assets-global.website-files.com/611229cc97f64a4a558cf3f7/6303601b30903d1889705916_monday_white.png"
        alt=""
        className="h-5 cursor-pointer tablet:h-8"
      />
      <div className="flex items-center justify-center gap-2">
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-8 w-8 items-center justify-center  tablet:h-10 tablet:w-10">
              <img
                src={search}
                alt="Notifications"
                className="h-5 w-5 tablet:h-6 tablet:w-6"
              />
            </button>
          </span>
        </div>
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-8 w-8 items-center justify-center  tablet:h-10 tablet:w-10">
              <img
                src={invite}
                alt="Notifications"
                className="h-5 w-5 tablet:h-6 tablet:w-6"
              />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderHomeMobile;

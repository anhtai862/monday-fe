import React from "react";
import HeaderPage from "./HeaderPage";
import SubNav from "./SubNav";
import BodyDashBoard from "./BodyDashBoard/BodyDashBoard";
import close from "../../assets/images/iconHeader/close.png";

import FooterPanel from "./FooterPanel";

const MainDashBoard = () => {
  return (
    <div className=" relative h-screen  bg-[#292f4c] font-figtree text-whiteDarkmode">
      <HeaderPage />
      <div className=" mt-[49px] gap-3 tablet:mt-[72px] desktop:mt-12 desktop:flex">
        <SubNav />
        <BodyDashBoard />
      </div>
      <div className=" z-20 hidden desktop:fixed desktop:bottom-6 desktop:right-20 desktop:block">
        <div className="relative">
          <div className="absolute -right-[6px] -top-[9px] rounded-full  bg-white text-center ">
            <img src={close} alt="" className="  h-4 w-4  " />
          </div>
          <button className="rounded-full bg-[#0073ea] text-[17px] text-white desktop:px-[17px] desktop:py-1">
            Help
          </button>
        </div>
      </div>
      <div className="fixed bottom-24 right-4 z-20 tablet:bottom-36 tablet:right-8 desktop:hidden ">
        <div className=" h-[38px] w-[38px] rounded-2xl bg-[#0073ea] text-center text-white shadow-md  shadow-[#0073ea] hover:bg-[#0060b9] tablet:h-16 tablet:w-16">
          <span className="m-auto text-3xl font-light leading-[38px] tablet:text-[48px] tablet:leading-[64px]">
            +
          </span>
        </div>
      </div>

      <div className=" fixed bottom-0 left-0 right-0 z-10 desktop:hidden ">
        <FooterPanel />
      </div>
    </div>
  );
};

export default MainDashBoard;

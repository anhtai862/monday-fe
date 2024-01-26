import React from "react";
import logo from "../../assets/images/iconHeader/logo.png";
import installProduct from "../../assets/images/iconHeader/installProduct.png";
import noti from "../../assets/images/iconHeader/noti.png";
import inbox from "../../assets/images/iconHeader/inbox.png";
import app from "../../assets/images/iconHeader/app.png";
import help from "../../assets/images/iconHeader/help.png";
import invite from "../../assets/images/iconHeader/invite.png";
import search from "../../assets/images/iconHeader/search.png";
import HeaderMyWorkMobile from "./HeaderMobile/HeaderMyWorkMobile";
import HeaderHomeMobile from "./HeaderMobile/HeaderHomeMobile";

function HeaderPage({ headerOfPage }) {
  const renderHeaderMobile = () => {
    switch (headerOfPage) {
      case "home":
        return <HeaderHomeMobile />;
      case "mywork":
        return <HeaderMyWorkMobile />;

      default:
        break;
    }
  };

  return (
    <div className=" z-10 justify-between bg-[#292f4c] font-figtree text-white  desktop:fixed desktop:left-0 desktop:right-0 desktop:top-0 desktop:inline-flex desktop:min-h-12 desktop:pl-1 desktop:pr-6">
      {/* left */}
      <div className="hidden items-center justify-center desktop:flex">
        <div className=" px-6 ">
          <img src={installProduct} alt="#" className="cursor-pointer" />
        </div>
        <div className=" flex items-center justify-center pr-3">
          <img src={logo} alt="#" />
          <h1 className="  pl-2 text-base ">
            <span className="pr-1 font-popi font-semibold">Monday</span>
            <span className="font-figtree font-light">work management</span>
          </h1>
        </div>
        <div className=" text-sm text-[#0073ea] hover:text-white">
          <button className=" flex items-center justify-center gap-1 rounded border border-[#0073ea] px-2 py-1 hover:bg-[#0073ea] ">
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 fill-current "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </span>
            See Plan
          </button>
        </div>
      </div>
      {/* mobile */}
      {renderHeaderMobile()}
      {/* mobile */}
      {/* desktop right */}
      {/* 1 */}
      <div className="hidden items-center justify-center desktop:flex ">
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-10 w-10  items-center justify-center">
              <img src={noti} alt="Notifications" className="h-5 w-5" />
            </button>
          </span>
        </div>
        {/* 2 */}
        <div className=" relative rounded hover:bg-[#4b4e69]">
          <span className=" inline-flex">
            <button className=" flex h-10 w-10  items-center justify-center">
              <img src={inbox} alt="Notifications" className="h-5 w-5" />
            </button>
          </span>
          <span className=" absolute right-0 top-0 h-4 w-4 rounded-full bg-black text-center font-figtree text-xs font-normal leading-4 text-white">
            1
          </span>
        </div>
        {/* 3 */}
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-10 w-10  items-center justify-center">
              <img src={invite} alt="Notifications" className="h-5 w-5" />
            </button>
          </span>
        </div>
        {/* 4 */}
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-10 w-10  items-center justify-center">
              <img src={app} alt="Notifications" className="h-5 w-5" />
            </button>
          </span>
        </div>
        {/* 5 */}
        <div className="  min-h-[22px] w-[1px] bg-[#4b4e69]"></div>

        {/* 6 */}
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-10 w-10  items-center justify-center">
              <img src={search} alt="Notifications" className="h-5 w-5" />
            </button>
          </span>
        </div>
        {/* 7 */}
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-10 w-10  items-center justify-center">
              <img src={help} alt="Notifications" className="h-5 w-5" />
            </button>
          </span>
        </div>

        <div className=" flex  cursor-pointer items-center justify-center rounded-bl-[4px] rounded-br-[20px] rounded-tl-[4px] rounded-tr-[20px] bg-[#4b4e69] bg-opacity-[0.5] hover:bg-opacity-100">
          <img
            src="https://cdn.monday.com/images/logos/monday_logo_icon.png"
            alt=""
            className="mx-2 h-6 w-6"
          />
          <span className="h-8 w-8 rounded-full bg-[#a457d1] text-center leading-8">
            D
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;

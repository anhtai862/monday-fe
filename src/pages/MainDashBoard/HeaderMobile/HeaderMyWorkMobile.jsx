import React from "react";
import installProduct from "../../../assets/images/iconHeader/installProduct.png";
import ellipsis from "../../../assets/images/iconHeader/ellipsis.png";

function HeaderMyWorkMobile() {
  return (
    <div className="fixed left-0 right-0 top-0 flex items-center justify-between bg-[#1c1f3b] px-4  py-2 tablet:px-6  tablet:py-4 desktop:hidden">
      <h1 className=" text-lg font-semibold tablet:text-xl laptop:text-2xl">
        My work
      </h1>
      <div className="flex items-center justify-center gap-2">
        <div className=" rounded hover:bg-[#4b4e69]">
          <span className="inline-flex ">
            <button className=" flex h-8 w-8 items-center justify-center  tablet:h-10 tablet:w-10">
              <img
                src={installProduct}
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
                src={ellipsis}
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

export default HeaderMyWorkMobile;

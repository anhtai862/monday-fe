import React from "react";

function BtnBack({ handle, disable }) {
  return (
    <button
      className=" flex w-full items-center  justify-center rounded border border-gray-400 px-4 py-2 font-figtree text-sm font-normal  hover:bg-gray-300   tablet:w-24 tablet:text-base"
      disabled={disable}
      onClick={handle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <span>Back</span>
    </button>
  );
}

export default BtnBack;

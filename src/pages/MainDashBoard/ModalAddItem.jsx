import React from "react";
import close from "../../assets/images/iconHeader/close.png";

function ModalAddItem() {
  const modalClose = document.querySelector(".js-modal-close");

  const handleCloseModal = () => {
    modalClose.classList.add(".hidden");
    console.log(modalClose);
  };
  return (
    <div className="js-modal-close flex w-full flex-col laptop:absolute laptop:max-w-[500px]  laptop:gap-4 laptop:rounded-lg laptop:bg-[#181b34] laptop:p-8">
      <button
        onClick={handleCloseModal}
        className=" absolute right-[16px] top-4 rounded px-1 py-1 hover:bg-[#4b4e69]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h1 className="laptop:text-[32px]">Create item on a board</h1>
      <div className="flex w-full flex-col items-start justify-center laptop:gap-2">
        <span className="text-sm ">item name</span>
        <input
          type="text"
          name="itemName"
          id=""
          placeholder="For example, project proposal "
          className="w-full rounded bg-hoverDarkmode text-base laptop:px-4 laptop:py-3"
          required
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center laptop:gap-2">
        <span className="text-sm">Select where to create this item</span>
        <input
          type="text"
          name="itemName"
          id=""
          placeholder="Select board "
          className="w-full rounded bg-hoverDarkmode text-base laptop:px-4 laptop:py-3"
          required
        />
        <input
          type="text"
          name="itemName"
          id=""
          placeholder="Select group in board "
          className="w-full rounded bg-hoverDarkmode text-base laptop:px-4 laptop:py-3"
          required
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center laptop:gap-2">
        <span className="text-sm">Select a date</span>

        <input
          type="text"
          name="itemName"
          id=""
          placeholder="Without a Date "
          className="w-full rounded bg-hoverDarkmode text-base laptop:px-4 laptop:py-3"
          required
        />
      </div>
      <div className="flex flex-row items-center justify-end gap-4 laptop:pt-[56px] ">
        <button className="rounded bg-transparent   hover:bg-hoverDarkmode laptop:px-4 laptop:py-2">
          Cancel
        </button>
        <button className="rounded bg-hoverDarkmode opacity-75 laptop:px-4 laptop:py-2">
          Create item
        </button>
      </div>
    </div>
  );
}

export default ModalAddItem;

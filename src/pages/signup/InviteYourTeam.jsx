import React from "react";

function InviteYourTeam() {
  return (
    <div className="grid h-screen tablet:grid-cols-5 	">
      <div className="box-border flex w-full flex-col px-6 py-8 font-figtree text-sm font-normal tablet:col-span-3	tablet:text-sm laptop:px-8 laptop:py-10	laptop:text-base desktop:px-24 desktop:py-16 desktop:text-base">
        <img
          src="https://cdn.monday.com/images/logos/logo-full-big.png"
          alt="monday"
          className="  mx-auto mb-8 h-6 laptop:mb-16 laptop:ml-0 laptop:inline-block laptop:h-8"
        />
        <h1 className="font-popi text-base font-semibold tablet:text-xl laptop:text-2xl">
          Who else is on your team?
        </h1>
        <label htmlFor="" className=" py-3  ">
          <span>Invite with link (anyone with a @ email)</span>
          <div className="flex  justify-start">
            <input
              type="text"
              name="coppy"
              id=""
              placeholder="https://aa57376.monday.com/users/sign_up?invitationId=34988395821909230000"
              className=" w-full border border-gray-400 px-3"
            />
            <button className="flex items-center justify-center rounded border border-gray-400 px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>

              <span>Coppy</span>
            </button>
          </div>
        </label>

        <div className="flex flex-col gap-2 pb-3 ">
          <div className="flex">
            <input
              type="text"
              name="coppy"
              id=""
              placeholder="Add email here..."
              className="w-full border border-gray-400 px-3 shadow"
            />
            <button className="flex items-center justify-center rounded border border-gray-400 px-4 py-2 shadow">
              <span>Member</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 pl-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex">
            <input
              type="text"
              name="coppy"
              id=""
              placeholder="Add email here..."
              className="w-full border border-gray-400 px-3 shadow"
            />
            <button className="flex items-center justify-center rounded border border-gray-400 px-4 py-2 shadow">
              <span>Member</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 pl-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="flex w-full items-center justify-center rounded px-4 py-2  text-sm shadow hover:bg-gray-300 tablet:max-w-36 laptop:max-w-44 laptop:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Add another</span>
        </button>
        <div className="flex h-full flex-col justify-end gap-3 pt-6 tablet:flex-row tablet:items-end tablet:justify-between">
          <button className="rounded px-4 py-2 font-figtree text-sm font-normal  hover:bg-gray-300  tablet:text-sm laptop:text-base desktop:text-base">
            Remind me late
          </button>
          <button
            disabled
            className="rounded px-4 py-2 font-figtree text-sm font-normal disabled:bg-slate-200  disabled:text-gray-400 tablet:text-sm laptop:text-base desktop:text-base"
          >
            Invite your team
          </button>
        </div>
      </div>

      <div className=" hidden  h-full justify-center bg-[#00ca72] tablet:col-span-2 tablet:block">
        <div className="h-full bg-[url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png)] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default InviteYourTeam;

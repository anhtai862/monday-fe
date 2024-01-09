import React from "react";

import RightHandColumnTable from "./RightHandColumnTable";

function LayoutRight({ background, urlll, orderOfPage }) {
  const style = {
    color: `bg-[${background}] hidden h-full justify-center tablet:col-span-2 tablet:block `,
    img: `h-full ${urlll}  bg-contain bg-center bg-no-repeat`,
  };

  return orderOfPage <= 4 ? (
    <div className={style.color}>
      <div className={style.img}></div>
    </div>
  ) : (
    <RightHandColumnTable />
  );
}

export default LayoutRight;

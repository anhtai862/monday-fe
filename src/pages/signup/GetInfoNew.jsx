import React, { useState } from "react";
import Signup from "./Signup";
import CreateAccount from "./CreateAccount";
import SignupPageThird from "./SignupPageThird";
import SignupPageFourth from "./SignupPageFourth";
import InviteYourTeam from "./InviteYourTeam";
import BoardPage from "../login/BoardPage";
import ColumnTable from "../login/ColumnTable";
import ItemsManagePage from "../login/ItemsManagePage";

function GetInfoNew() {
  const [index, setIndex] = useState(0);
  function renderLayout() {
    switch (index) {
      case 0:
        return <Signup setIndex={setIndex} numberOfPage={index} />;
      case 1:
        return <CreateAccount setIndex={setIndex} numberOfPage={index} />;
      case 2:
        return <SignupPageThird setIndex={setIndex} numberOfPage={index} />;
      case 3:
        return <SignupPageFourth setIndex={setIndex} numberOfPage={index} />;
      case 4:
        return <InviteYourTeam setIndex={setIndex} numberOfPage={index} />;
      case 5:
        return <BoardPage setIndex={setIndex} numberOfPage={index} />;
      case 6:
        return <ColumnTable setIndex={setIndex} numberOfPage={index} />;
      case 7:
        return <ItemsManagePage setIndex={setIndex} numberOfPage={index} />;

      default:
        break;
    }
  }
  console.log("index, ", index);

  return <div>{renderLayout()}</div>;
}

export default GetInfoNew;

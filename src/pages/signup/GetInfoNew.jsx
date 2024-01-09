import React, { useState } from "react";
import Signup from "./Signup";
import CreateAccount from "./CreateAccount";
import SignupPageThird from "./SignupPageThird";
import SignupPageFourth from "./SignupPageFourth";
import InviteYourTeam from "./InviteYourTeam";
import BoardPage from "../CreateBoard/BoardPage";
import ColumnTable from "../CreateBoard/ColumnTable";
import ItemsManagePage from "../CreateBoard/ItemsManagePage";
import ViewBoard from "../CreateBoard/ViewBoard";

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
      case 8:
        return <ViewBoard setIndex={setIndex} numberOfPage={index} />;

      default:
        break;
    }
  }
  console.log("index, ", index);

  return <div>{renderLayout()}</div>;
}

export default GetInfoNew;

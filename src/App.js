import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import CreateAccount from "./pages/signup/CreateAccount";
import SignupPageThird from "./pages/signup/SignupPageThird";
import SignupPageFourth from "./pages/signup/SignupPageFourth";
import InviteYourTeam from "./pages/signup/InviteYourTeam";
import BoardPage from "./pages/login/BoardPage";
import ColumnTable from "./pages/login/ColumnTable";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/SignupPageThird" element={<SignupPageThird />} />
        <Route path="/SignupPageFourth" element={<SignupPageFourth />} />
        <Route path="/InviteYourTeam" element={<InviteYourTeam />} />
        ColumnTable
        <Route path="/BoardPage" element={<BoardPage />} />
        <Route path="/ColumnTable" element={<ColumnTable />} />
      </Routes>
    </>
  );
}

export default App;

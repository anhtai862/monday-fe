import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import CreateAccount from "./pages/signup/CreateAccount";
import SignupPageThird from "./pages/signup/SignupPageThird";
import SignupPageFourth from "./pages/signup/SignupPageFourth";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/SignupPageThird" element={<SignupPageThird />} />
        <Route path="/SignupPageFourth" element={<SignupPageFourth />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import CreateAccount from "./pages/signup/CreateAccount";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;

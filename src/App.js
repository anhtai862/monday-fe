import { Routes, Route } from "react-router-dom";

import GetInfoNew from "./pages/signup/GetInfoNew";
import MainDashBoard from "./pages/MainDashBoard/MainDashBoard";
function App() {
  return (
    <>
      <Routes>
        MainDashBoard
        <Route path="/" element={<MainDashBoard />} />
        <Route path="/signup" element={<GetInfoNew />} />
      </Routes>
    </>
  );
}

export default App;

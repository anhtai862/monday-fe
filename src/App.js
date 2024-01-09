import { Routes, Route } from "react-router-dom";

import GetInfoNew from "./pages/signup/GetInfoNew";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetInfoNew />} />
      </Routes>
    </>
  );
}

export default App;

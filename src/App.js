import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;

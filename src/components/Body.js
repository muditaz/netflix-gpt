import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;

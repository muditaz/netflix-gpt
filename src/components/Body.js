import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useSelector } from "react-redux";

const Body = () => {
  const userInfo = useSelector((state) => {return(state.userInfo)});

  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={userInfo ? <Browse /> : <Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;

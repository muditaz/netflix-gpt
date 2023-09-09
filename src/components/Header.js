import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../constants/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => {return(state.userInfo)});

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({type: 'setUserInfo', payload: null});
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
      {userInfo && <div className="flex p-2">
          <span className="p-7 font-bold text-white">{userInfo.displayName}</span>
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>}
    </div>
  );
};

export default Header;

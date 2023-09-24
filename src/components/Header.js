import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../constants/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => {return(state.userInfo)});
  const showGPTSearchPage = useSelector((state) => {return(state.gptInfo.showGPTSearchPage)});
  const langKey = useSelector((state) => {return(state.config.lang)});

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({type: 'setUserInfo', payload: null});
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const toggleGPTSearchPage = () => {
    dispatch({type: 'toggleGPTSearchPage'});
  };

  const handleLangChange = (e) => {
    dispatch({type: 'setLanguage', payload: e.target.value});
  };

  return (
    <div className="absolute w-screen px-8 py-0 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
      {userInfo && <div className="flex p-2 justify-between">
          {showGPTSearchPage && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLangChange} value={langKey}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
          </select>}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={toggleGPTSearchPage}>
            {showGPTSearchPage ? "Home Page" : "GPT Search"}
          </button>
          <span className="p-7 font-bold text-white">{userInfo.displayName}</span>
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>}
    </div>
  );
};

export default Header;

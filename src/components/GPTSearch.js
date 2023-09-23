import { BG_URL } from "../constants/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div>
      <div>
        <div className="fixed -z-10">
          <img src={BG_URL} alt="logo" />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
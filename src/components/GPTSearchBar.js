import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import lang from "../constants/languageConstants";
import { TMDB_API_OPTIONS } from "../constants/constants";

const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((state) => {return(state.config.lang)});
    const searchInput = useRef(null);

    const searchMovieInTMDB = async (movieName) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&include_adult=false&language=en-US&page=1", TMDB_API_OPTIONS);
      const json = await data.json();
      return(json.results);
    };

    const handleGPTSearchClick = async () => {
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchInput.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
      });

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const tmdbResults = [];
      for(let i = 0; i < gptMovies.length; i++) {
        tmdbResults.push(await searchMovieInTMDB(gptMovies[i]));
      }
      dispatch({type: 'setGPTMovieResults', payload: {gptMovies, tmdbResults}});

    };

  return (
    <div>
      <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => {e.preventDefault()}}>
          <input
            ref={searchInput}
            type="text"
            className=" p-4 m-4 col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGPTSearchClick}>
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const  gptMovieResult = useSelector((store) => store.gptInfo.gptMovieResult);
  const  tmdbMovieResult = useSelector((store) => store.gptInfo.tmdbMovieResult);
  if (!gptMovieResult) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMovieResult.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbMovieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GPTMovieSuggestions;
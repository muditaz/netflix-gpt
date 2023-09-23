import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants/constants";

const useTrailerVideo = (movieId) => {

  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => {return(state.movies.trailerVideo)});

  const getTrailerId = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", TMDB_API_OPTIONS);
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch({type: 'setTrailerVideo', payload: trailer});
  };

  useEffect(() => {
    if(!trailerVideo)
    getTrailerId();
  }, []);

  return(trailerVideo);

};

export default useTrailerVideo;
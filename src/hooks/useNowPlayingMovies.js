import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((state) => {return(state.movies.nowPlayingMovies)});

    const getNowPlayingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch({type: 'setNowPlayingMovies', payload: json.results});
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return(nowPlayingMovies);
};

export default useNowPlayingMovies;
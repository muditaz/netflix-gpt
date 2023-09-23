import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../constants/constants";

const useMovieTypes = (movieTypesArray) => {
    const dispatch = useDispatch();
    const movieTypes = useSelector((state) => {return(state.movies.types)});

    const getMovieTypes = async() => {
        const movieTypesObj = {};
        for(let i = 0; i < movieTypesArray.length; i++) {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieTypesArray[i].type}?page=1`, TMDB_API_OPTIONS); 
            const json = await data.json();
            movieTypesObj[movieTypesArray[i].type] = json.results;  
        }
        dispatch({type: "setMovieTypes", payload: movieTypesObj});
    };

    useEffect(() => {
        if(!movieTypes[Object.keys(movieTypes)[0]])
        getMovieTypes();
    }, []);

    return(movieTypes);
};

export default useMovieTypes;
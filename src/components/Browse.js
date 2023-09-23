
import Header from "./Header";
import useMovieTypes from "../hooks/useMovieTypes";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from './GPTSearch';


const Browse = () => {

    const movieTypesArray = [
        {
            type: "now_playing",
            title: "Now playing"
        },
        {
            type: "popular",
            title: "Popular"
        },
        {
            type: "top_rated",
            title: "Top Rated"
        },
        {
            type: "upcoming",
            title: "Upcoming"
        }
    ];

    const movieTypes = useMovieTypes(movieTypesArray);
    const showGPTSearchPage = useSelector((state) => {return(state.gptInfo.showGPTSearchPage)});

    return(
        <div>
            <Header />
            {showGPTSearchPage ? <GPTSearch />: <><MainContainer nowPlayingMovies={movieTypes.now_playing}/>
            <SecondaryContainer movieTypes={movieTypes} movieTypesArray={movieTypesArray} /></>}
        </div>
    );
};

export default Browse;
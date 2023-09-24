import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = (props) => {
    const { nowPlayingMovies } = props;
    if(!nowPlayingMovies)
    return;

    const mainMovie = nowPlayingMovies[0];
    const { original_title, overview, id } = mainMovie;

    return(
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;
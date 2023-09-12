import MovieList from "./MovieList";

const SecondaryContainer = (props) => {
  const { movieTypes, movieTypesArray } = props;

  return (
    <div className="bg-black w-screen">
      <div className="-mt-30 pl-12 relative z-20">
        {
            movieTypesArray.map((movieType) => {
                return(<MovieList title={movieType.title} movies={movieTypes[movieType.type]} />)
            })
        }
      </div>
    </div>
  );
};
export default SecondaryContainer;

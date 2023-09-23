const initialState = {
  userInfo: null,
  movies: {
    types: {
      now_playing: null,
      popular: null,
      top_rated: null,
      upcoming: null,
    },
    trailerVideo: null,
  },
  gptInfo: {
    showGPTSearchPage: false
  },
  config: {
    lang: "en"
  }
};

export default initialState;

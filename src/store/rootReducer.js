import initialState from "./initialState";
import { produce } from "immer";

const rootReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case 'setUserInfo': {
                if(action.payload !== null) {
                    draft.userInfo = action.payload;
                } else {
                    return({...initialState});
                }
                break;
            }
            case 'setMovieTypes': {
                draft.movies.types = action.payload;
                break;
            }
            case 'setTrailerVideo': {
                draft.movies.trailerVideo = action.payload;
                break;
            }
            case 'toggleGPTSearchPage': {
                draft.gptInfo.showGPTSearchPage = !draft.gptInfo.showGPTSearchPage;
                if(draft.gptInfo.showGPTSearchPage === false) {
                    draft.gptInfo = {...initialState}.gptInfo;
                }
                break;
            }
            case 'setLanguage': {
                draft.config.lang = action.payload;
                break;
            }
            case 'setGPTMovieResults': {
                draft.gptInfo.gptMovieResult = action.payload.gptMovies;
                draft.gptInfo.tmdbMovieResult = action.payload.tmdbResults;
                break;
            }
            default:
                break;
        }
    });
};

export default rootReducer;
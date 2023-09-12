import initialState from "./initialState";
import { produce } from "immer";

const rootReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case 'setUserInfo': {
                draft.userInfo = action.payload;
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
            default:
                break;
        }
    });
};

export default rootReducer;
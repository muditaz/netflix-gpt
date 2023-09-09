import initialState from "./initialState";
import { produce } from "immer";

const rootReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case 'setUserInfo': {
                draft.userInfo = action.payload;
                break;
            }
            default:
                break;
        }
    });
};

export default rootReducer;
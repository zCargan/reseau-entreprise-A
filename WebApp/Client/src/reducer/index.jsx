import { combineReducers } from "redux";
import formationReducer from "./annonceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    formationState: formationReducer,
	userState: userReducer,
});

export default rootReducer;

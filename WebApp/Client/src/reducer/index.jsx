import { combineReducers } from "redux";
import formationReducer from "./formationReducer";

const rootReducer = combineReducers({
	formationState: formationReducer,
});

export default rootReducer;

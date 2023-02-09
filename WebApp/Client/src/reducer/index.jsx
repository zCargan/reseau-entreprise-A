import { combineReducers } from "redux";
import formationReducer from "./formationReducer";
import themesReducer from "./themesReducer";
import trainersReducer from "./trainersReducer";

const rootReducer = combineReducers({
	formationState: formationReducer,
	themesState: themesReducer,
	trainersReducer: trainersReducer,
});

export default rootReducer;

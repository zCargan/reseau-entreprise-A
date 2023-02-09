import { createSlice } from "@reduxjs/toolkit";
import { addDataFormation } from "../action/formationAction";
const initialState = { formations: [], filterFormations: [] };

const formationReducer = createSlice({
	name: "formation",
	initialState: initialState,
	reducer: {},
	extrareducers: (builder) => {
		builder
			.addCase(addDataFormation, (state, action) => {
				state.formations = action.payload;
			})
			.addDefaultCase((state, action) => {
				return state;
			});
	},
});

export default formationReducer.reducer;

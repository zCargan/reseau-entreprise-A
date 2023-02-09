import { createSlice } from "@reduxjs/toolkit";
import { addDataFormation } from "../action/formationAction";
const initialState = { formations: [], filterFormations: [] };

const formationReducer = createSlice({
	name: "formations",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addDataFormation, (state, action) => {
				console.log("In reducer");
				console.log(action.payload);
				state.formations = action.payload;
			})
			.addDefaultCase((state, action) => {
				return state;
			});
	},
});

export default formationReducer.reducer;

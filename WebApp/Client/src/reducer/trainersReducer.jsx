import { createSlice } from "@reduxjs/toolkit";
import { addTrainers } from "../action/trainersAction";

// FAIRE LA TECHNIQUE DE TAALTOOLBOX AVEC LES COOKIES
const initialState = { trainersList: [] };

const trainersReducer = createSlice({
	name: "trainers",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addTrainers, (state, action) => {
				state.trainersList = action.payload;
			})
			.addDefaultCase((state, action) => {});
	},
});

export default trainersReducer.reducer;

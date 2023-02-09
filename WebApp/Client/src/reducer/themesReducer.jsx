import { createSlice } from "@reduxjs/toolkit";
import { addThemes } from "../action/themesAction";

// FAIRE LA TECHNIQUE DE TAALTOOLBOX AVEC LES COOKIES
const initialState = { themesList: [] };

const themesReducer = createSlice({
	name: "themes",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addThemes, (state, action) => {
				state.themesList = action.payload;
			})
			.addDefaultCase((state, action) => {});
	},
});

export default themesReducer.reducer;

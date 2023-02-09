import { createSlice } from "@reduxjs/toolkit";
import { addGoogleDataUser } from "../action/useraction";

// FAIRE LA TECHNIQUE DE TAALTOOLBOX AVEC LES COOKIES
const initialState = {
	username: "",
	rule: "",
	firstname: "",
	lastname: "",
	email: "",
};

const userReducer = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addGoogleDataUser, (state, action) => {})
			.addDefaultCase((state, action) => {});
	},
});

export default userReducer.reducer;

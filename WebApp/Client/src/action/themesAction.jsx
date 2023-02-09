import { ADD_THEME, GET_THEMES } from "./actionTypes";
import Axios from "axios";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
const DOMAIN_NAME = `http://localhost:5000`;

// SEND FORMATION DATA TO THE REDUCER
export const addThemes = createAction(ADD_THEME, function prepare(themes) {
	return { payload: themes };
});

// GET TRAINERS FROM DB
export const getAllTrainers = createAction(
	GET_THEMES,
	async (arg, thunkAPI) => {
		const themes = await Axios.get(DOMAIN_NAME + "/themes").catch((err) => {
			console.err(err);
		});
		thunkAPI.patch(addThemes(themes.data));
	}
);

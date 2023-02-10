import { ADD_FORMATION, GET_FORMATION } from "./actionTypes";
import Axios from "axios";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
const DOMAIN_NAME = `https://academox.com:80/api`;

// SEND FORMATION DATA TO THE REDUCER
export const addDataFormation = createAction(
	ADD_FORMATION,
	function prepare(formations) {
		console.log("In there");
		return { payload: formations };
	}
);

// GET FORMATION DATA TO THE DB
export const getDataFormation = createAsyncThunk(
	GET_FORMATION,
	async (arg, thunkAPI) => {
		const formations = await Axios.get(`${DOMAIN_NAME}/formations`).catch(
			(err) => {
				console.error(err);
			}
		);
		console.log(formations.data);
		thunkAPI.dispatch(addDataFormation(formations.data));
	}
);

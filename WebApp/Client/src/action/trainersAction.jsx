import { ADD_TRAINERS, GET_TRAINERS } from "./actionTypes";
import Axios from "axios";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
const DOMAIN_NAME = `http://localhost:5000`;

// SEND FORMATION DATA TO THE REDUCER
export const addTrainers = createAction(
	ADD_TRAINERS,
	function prepare(trainers) {
		return { payload: trainers };
	}
);

// GET TRAINERS FROM DB
export const getAllTrainers = createAction(
	GET_TRAINERS,
	async (arg, thunkAPI) => {
		const trainers = await Axios.get(DOMAIN_NAME + "/users/trainers").catch(
			(err) => {
				console.err(err);
			}
		);
		thunkAPI.patch(addTrainers(trainers.data));
	}
);

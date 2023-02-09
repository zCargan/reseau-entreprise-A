import {
	ADD_USER_GOOGLE,
	ADD_USER_SIGNIN,
	ADD_USER_REGISTER,
} from "./actionTypes";

import Axios from "axios";

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";

const DOMAIN_NAME = `http://localhost:3000`;

// SEND GOOGLE USER DATA TO THE USER REDUCER

export const addGoogleDataUser = createAction(
	ADD_USER_GOOGLE,
	function prepare(user) {
		return {
			payload: user,
		};
	}
);

// SIGIN USER WITH GOOGLE
// export const googleSignIn = createAsyncThunk(
// 	ADD_USER_GOOGLE,
// 	async (arg, thunk) => {
// 		const payload = await signInWithPopup(auth, provider).catch((err) => {
// 			console.error(err);
// 		});

// 		// RECUPERER LE TOKEN DE LA SESSION
// 		const token = await auth.currentUser.getIdToken();

// 		if (payload.user && token) {
// 			//TODO CHECKER DABORD SI LUTILISATEUR EXISTE EN DB AVANT DE LINSERER
// 			const response = await Axios.post(
// 				`${DOMAIN_NAME}/api/users/google`,
// 				{
// 					userName: payload.user.displayName,
// 					userMail: payload.user.email,
// 				},
// 				{
// 					headers: {
// 						AuthFirebase: token,
// 					},
// 				}
// 			).catch((err) => {
// 				console.error(err);
// 			});
// 			console.log(response);
// 			thunkAPI.dispatch(
// 				addUserSignInInfo({
// 					user: response.data.user,
// 					token: token,
// 					status: response.data.status,
// 				})
// 			);
// 		} else {
// 			console.warn("cannot get user");
// 		}
// 	}
// );

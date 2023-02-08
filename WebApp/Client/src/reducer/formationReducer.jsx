import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: "",
	title: "",
	author: "",
	price: "",
	image: "",
	price: 0,
};

const formationReducer = createSlice({
    name : 'formation',
    initialState : initialState,
    reducer : {},
    extrareducers: (builder)=>{
        builder.addCase(addFormationData, (state, action)=>{})
    }
})

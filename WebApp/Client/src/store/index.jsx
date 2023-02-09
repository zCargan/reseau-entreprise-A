import { configureStore } from "@reduxjs/toolkit";
// import localStorage from "localStorage";
import rootReducer from "../reducer";
import logger from "redux-logger";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import localForage from "localforage";

const persistConfig = {
	key: "root",
	version: 1,
	storage: localForage,
	blacklist: [], //on met les reducers dont on ne veut pas sauver l'état (whitelist pour le contraire)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	// middleware: [thunk, logger],
});

export const persistor = persistStore(store);

// export default store;

// const persitConfig = {
// 	key: "root",
// 	version: 1,
// 	storage: localStorage,
// 	blacklist: [],
// };

// const persistedReducer = persistReducer(persitConfig, rootReducer);

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoreActions: [
// 					FLUSH,
// 					REHYDRATE,
// 					PAUSE,
// 					PERSIST,
// 					PURGE,
// 					REGISTER,
// 				],
// 			},
// 		}),
// });

// export const persistor = persistStore(store);

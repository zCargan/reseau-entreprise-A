import { configureStore } from "@reduxjs/toolkit";
// import localStorage from "localStorage";
import rootReducer from "../reducer";

const store = configureStore({ reducer: rootReducer });

export default store;

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

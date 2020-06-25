import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { usersSlice } from "./usersReducers/contactsReducers";
import { filterSlice } from "./filterReducers/filterReducers";
import { loadingSlice } from "../Redux/loading/loadingReducer";
import { errorSlice } from "../Redux/error/errorReducer";
import {
  isAuntificatedSlice,
  AuntificatedUserSlice,
} from "./isAuntefReducer/isAuntedReducer";

const rootReducer = combineReducers({
  contactState: usersSlice.reducer,
  filterState: filterSlice.reducer,
  loadingState: loadingSlice.reducer,
  error: errorSlice.reducer,
  isAuntificatedState: isAuntificatedSlice.reducer,
  auntificatedUserState: AuntificatedUserSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isAuntificatedState", "auntificatedUserState"],
};

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: ["persist/PERSIST"],
  },
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware(defaultMiddlewareConfig).concat(thunk),
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);

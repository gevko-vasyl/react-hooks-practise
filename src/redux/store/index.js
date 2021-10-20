// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { rootReducer } from "../reducers";
import todos from "redux/slices/todos";

// export const store = createStore(rootReducer, devToolsEnhancer());

const rootReducer = { todos };

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// import { createStore, applyMiddleware } from "redux";
// import {
//   devToolsEnhancer,
//   composeWithDevTools,
// } from "redux-devtools-extension";

// import { rootReducer } from "../reducers";
// import thunk from "redux-thunk";

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(myMiddleware, thunk))
// );

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { myMiddleware } from "../middlewares/logger";
import todos from "redux/slices/todos";
const rootReducer = { todos };

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [myMiddleware, thunk],
});

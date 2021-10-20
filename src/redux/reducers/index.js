import { combineReducers } from "redux";
import todosReducer from "redux/reducers/todos";
import { filterReducer } from "redux/reducers/filter";

export const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

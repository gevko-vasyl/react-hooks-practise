import { ADD_TODO, DELETE_TODO, SET_TODO } from "../types";
import axios from "axios";

export const addTodo = (formData) => ({
  type: ADD_TODO,
  payload: formData,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const setTodo = (todos) => ({
  type: SET_TODO,
  payload: todos,
});

export const fetchTodo = () => async (dispatch) => {
  const result = await axios.get("http://localhost:7777/tasks");
  dispatch(setTodo(result.data));
};

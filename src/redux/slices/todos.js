import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodoList = createAsyncThunk(
  "todo/fetchTodoList",
  async () => {
    const result = await axios.get("http://localhost:7777/tasks");
    return result.data;
  }
);

export const createTodo = createAsyncThunk("todo/createTodo", async (todo) => {
  const result = await axios.post("http://localhost:7777/tasks", todo);
  return result.data;
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  const result = axios.delete(`http://localhost:7777/tasks/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: "todos",
  // initialState: [],
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  // reducers: {
  //   addTodo: (state, action) => [...state, action.payload],
  //   deleteTodo: (state, action) =>
  //     state.filter((todo) => todo.id !== action.payload),
  // },
  extraReducers: {
    [fetchTodoList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.error = null;
    },
    [fetchTodoList.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTodoList.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = "Error";
    },
    [createTodo.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.status = null;
      state.error = null;
    },
    [createTodo.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [createTodo.rejected]: (state, action) => {
      state.status = null;
      state.error = "Error";
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

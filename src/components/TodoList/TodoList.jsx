import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo/Todo";
import Form from "../TodoForm/TodoForm";
// import { fetchTodo } from "redux/actions/todos";
import { fetchTodoList } from "redux/slices/todos";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <>
      <h1>Todo List</h1>

      <Form />
      <ul>
        {todos.length ? (
          todos.map((todo, index) => (
            <li key={todo.id}>
              <Todo {...todo} index={index} />
            </li>
          ))
        ) : (
          <li>No tasks</li>
        )}
      </ul>
      <div>
        <button data-filter="all">All</button>
        <button data-filter="compeleted">Compeleted</button>
        <button data-filter="uncompeleted">Uncompeleted</button>
      </div>
    </>
  );
};

export default TodoList;

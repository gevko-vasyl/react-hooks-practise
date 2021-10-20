import { useState } from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import Form from "../TodoForm/TodoForm";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
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

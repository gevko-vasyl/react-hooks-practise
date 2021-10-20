import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
// import { addTodo } from "../../redux/actions/todos";
import { addTodo } from "redux/slices/todos";

const formInitialState = {
  title: "",
  author: "",
  priority: "Low",
  agree: false,
};

const TodoForm = () => {
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    form.id = nanoid();
    dispatch(addTodo(form));
    setForm(formInitialState);
  };

  const { title, author, priority, agree } = form;

  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <input
        type="text"
        name="title"
        placeholder="New Todo"
        autoFocus
        value={title}
        onChange={inputHandler}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        autoFocus
        value={author}
        onChange={inputHandler}
      />
      <select name="priority" value={priority} onChange={inputHandler}>
        <option value="Priority" disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label htmlFor="agree">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          checked={agree}
          onChange={inputHandler}
        />
        Agree with our policy
      </label>
      <button type="submit"> Add Todo</button>
    </form>
  );
};

export default TodoForm;

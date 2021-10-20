import { useDispatch } from "react-redux";
// import { deleteTodo } from "../../redux/actions/todos";
import { deleteTodo } from "redux/slices/todos";
import { BsTrashFill } from "react-icons/bs";

const Todo = ({ status, title, author, priority, id, index }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };
  const updateItem = () => {};
  return (
    <div>
      <div onClick={updateItem}>
        <p>{title}</p>
        <p>{priority} priority</p>
        <p>{author}</p>
        <span onClick={deleteItem}>
          <BsTrashFill />
        </span>
      </div>
    </div>
  );
};

export default Todo;

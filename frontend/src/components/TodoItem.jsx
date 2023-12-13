import PropTypes from "prop-types";
import {
  BsCircleFill,
  BsFillTrashFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const TodoItem = ({ handleEdit, handleDelete, todo }) => {
  return (
    <div className="task">
      <div className="checkbox" onClick={() => handleEdit(todo._id)}>
        {todo.done ? (
          <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
        ) : (
          <BsCircleFill className="icon" />
        )}

        <p className={(todo.done ? "line_through " : "") + "taskTitle"}>
          {todo.task}
        </p>
      </div>

      <div>
        <span>
          <BsFillTrashFill
            className="icon"
            onClick={() => handleDelete(todo._id)}
          />
        </span>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  todo: PropTypes.object,
};
export default TodoItem;

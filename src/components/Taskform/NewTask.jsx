import propTypes from "prop-types";
import { useState } from "react";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const onAdd = props.onAdd;
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-task flex items-center justify-center mt-3">
      {!isEditing && (
        <button
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={startEditingHandler}
        >
          Add New Task
        </button>
      )}
      {isEditing && <TaskForm onAdd={onAdd} onCancel={stopEditingHandler} />}
    </div>
  );
};


NewTask.propTypes = {
    onAdd: propTypes.func
}
export default NewTask;

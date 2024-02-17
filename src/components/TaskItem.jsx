// TaskItem.jsx
import propTypes from "prop-types";
import { useState } from "react";

const TaskItem = (props) => {
  const task = props.task;
  const onDelete = props.onDelete;
  const onToggle = props.onToggle;
  const onEdit = props.onEdit;

  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  // const inputRef = useRef(null);

  const toggleHandler = () => {
    if (!isEditing) {
      onToggle(task.id);
    }
  };

  const deleteHandler = () => {
    onDelete(task.id);
  };

  // Task Edit Feature
  const editHandler = () => {
    setEditing(true);
  };

  const editingChangeHandler = (event) => {
    setEditedName(event.target.value);
  };

  const editingDueDateChangeHandler = (event) => {
    setEditedDueDate(event.target.value);
  };

  const editSaveHandler = () => {
    // Save edited name and exit editing mode
    if (editedName.trim() !== "") {
      onEdit(task.id, editedName.trim(), editedDueDate);
    } else {
      setEditedName(task.name);
      setEditedDueDate(task.dueDate);
      // Reset to original name and due date if edited name or edited date is empty
    }
    setEditing(false); // Exit editing mode
  };

  const editCancelHandler = () => {
    setEditing(false);
    setEditedName(task.name);
    setEditedDueDate(task.dueDate);
  };

  return (
    <div
      className={`task ${task.completed ? "border-gray-400" : ""} ${
        isEditing ? "bg-[#dda73191]" : "bg-[#d3991cea]"
      } px-6 py-3 border-b-2 m-1 border-gray-200 rounded grid grid-cols-3 md:grid-cols-3 gap-4 items-center`}
    >
      <div className="flex items-center col-span-2 md:col-span-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleHandler}
          className="mr-2"
        />
        {isEditing ? (
          <div className="flex flex-col md:flex-row flex-1 gap-2">
            <input
              className="border-b-5 p-1 text-red-500 rounded-md focus:outline-none focus:border-blue-800 flex-1"
              type="text"
              value={editedName}
              onChange={editingChangeHandler}
            />
            <input
              type="date"
              value={editedDueDate}
              onChange={editingDueDateChangeHandler}
              className="border-b-5 p-1 text-red-500 rounded-md focus:outline-none focus:border-blue-800 flex-1"
            />
          </div>
        ) : (
          <div className="flex flex-col md:gap-4 md:flex-row md:justify-start">
            <div
              className={`cursor-pointer font-semibold ${
                task.completed ? "text-[#cf0202c2] line-through" : "text-black"
              } flex-1`}
              onDoubleClick={editHandler}
            >
              {task.name}
            </div>
            <div
              className={`cursor-pointer font-semibold ${
                task.completed
                  ? "text-[#cf0202c2] line-through"
                  : "text-gray-500"
              }`}
            >
              {task.dueDate}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end md:col-span-2">
        {isEditing ? (
          <>
            <button
              onClick={editSaveHandler}
              className="bg-[#4CAF50] hover:bg-[#4caf4fcb] text-white font-bold py-1 px-2 mr-2 rounded"
            >
              Save
            </button>
            <button
              onClick={editCancelHandler}
              className="bg-[#FF9800] hover:bg-[#ff9900dc] text-white font-bold py-1 px-2 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={editHandler}
              className="bg-[#4A90E2] hover:bg-[#4a91e2d2] text-white font-bold py-1 px-2 mr-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={deleteHandler}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );

  // return (
  //   <div className="card mb-4">
  //     <div className="flex gap-6">
  //       <div className="">
  //         <h4 className="text-2xl">{task.desc}</h4>
  //         <div className="flex col">
  //           {task.date}
  //         </div>
  //       </div>

  //       <div className="col-2 is-center">
  //         <button onClick={clickHandler} className="button icon-only clear">

  //         </button>
  //       </div>
  //       <div className="col-12">
  //         <p>{task.status}</p>
  //       </div>
  //     </div>

  //   </div>
  // );
};

TaskItem.propTypes = {
  task: propTypes.object,
  onDelete: propTypes.func,
  onToggle: propTypes.func,
  onEdit: propTypes.func,
};
export default TaskItem;

import propTypes from "prop-types";
import { useState } from "react";

const TaskForm = (props) => {
  const onAdd = props.onAdd;

  const [name, setName] = useState("");

  //handles form submission process
  const submitHandler = (event) => {
    event.preventDefault(); // handles the form submission via JavaScript without reloading the page

    if (!name.trim()) return; // This prevents adding empty or whitespace-only tasks.
    onAdd({ name, completed: false }); //calls function to add new task
    setName(""); // Resets the input field
  };

  const taskNameHandler = (event) => {
    setName(event.target.value); // receive input from the form and saves it to the name variable using state
  };

  return (
    <div className="ml-5 my-5 p-4 py-8 bg-[#291403] rounded-lg ">
      <div className=" text-center text-white text-lg font-semibold mb-4 ">
        Would You Like To Add A New Task?
      </div>
      <form
        className="add-form flex justify-between items-center p-2"
        onSubmit={submitHandler}
      >
        <div className="form-control">
          <label htmlFor="Task" className="mr-2 text-white text-lg font-bold">
            Task
          </label>
          <input
            type="text"
            placeholder="Add Task"
            className="rounded px-3 py-1"
            value={name}
            onChange={taskNameHandler}
          />
        </div>
        <input
          type="submit"
          value={"Save Task"}
          className="btn btn-block bg-[green] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  onAdd: propTypes.object,
};
export default TaskForm;

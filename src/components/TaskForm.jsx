import propTypes from "prop-types";
import { useState } from "react";

const TaskForm = (props) => {
  const onAdd = props.onAdd;

  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("")

  //handles form submission process
  const submitHandler = (event) => {
    event.preventDefault(); // handles the form submission via JavaScript without reloading the page

    if (!name.trim() || !dueDate ) return; // This prevents adding empty or whitespace-only tasks.
    onAdd({ name, completed: false, dueDate }); //calls function to add new task
    setName(""); // Resets the input field
    setDueDate("")// Reset
  };

  const taskNameHandler = (event) => {
    setName(event.target.value); // receive input from the form and saves it to the name variable using state
  };

  const dateHandler = (event) => {
    setDueDate(event.target.value)
}
  return (
    <div className="lg:ml-7 m-2 my-5 md:p-8 py-8 bg-[#291403] rounded-lg">
      <div className="text-center text-white text-lg font-semibold mb-2 md:mb-4">
        Would You Like To Add A New Task?
      </div>
      <form
        className="add-form grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 items-center px-4"
        onSubmit={submitHandler}
      >
        <div className="form-control flex flex-col md:flex-row mb-3 sm:mb-0 md:col-span-2">
          <label
            htmlFor="Task"
            className="mr-2 text-white flex items-center text-lg font-bold"
          >
            Task
          </label>
          <input
            type="text"
            placeholder="Hey! Add your Task"
            className="rounded p-3 flex-grow placeholder-[#999] placeholder-opacity-50 focus:placeholder-opacity-100 focus:placeholder-[#ff00009f]"
            value={name}
            onChange={taskNameHandler}
          />
        </div>
        <div className="form-control flex flex-col md:flex-row">
          <label
            htmlFor="DueDate"
            className="mr-2 text-white text-lg font-bold"
          >
            Due Date
          </label>
          <input
            type="date"
            className="rounded px-3 py-1 flex-grow"
            value={dueDate}
            onChange={dateHandler}
          />
        </div>
        <div className="flex justify-center md:justify-start md:col-span-1">
          <input
            type="submit"
            value="Save Task"
            className="btn bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded md:ml-11 mt-2 md:mt-0 w-full md:w-auto"
          />
        </div>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  onAdd: propTypes.func,
};
export default TaskForm;

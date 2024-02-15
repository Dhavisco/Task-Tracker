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
    <div className="lg:ml-5 m-2 my-5 md:p-8 py-8 bg-[#291403] rounded-lg">
      <div className=" text-center text-white text-lg font-semibold mb-2 md:mb-4">
        Would You Like To Add A New Task?
      </div>
      <form
        className="add-form flex flex-col gap-3 md:flex-row md:justify-between items-center p-2"
        onSubmit={submitHandler}
      >
        <div className="form-control flex mb-3 sm:mb-0">
          <label
            htmlFor="Task"
            className="mr-2 text-white flex items-center text-lg font-bold"
          >
            Task
          </label>
          <input
            type="text"
            placeholder="Hey! Add your Task"
            className="rounded p-3 w-[15rem] md:w-[24rem] placeholder-[#999] placeholder-opacity-50 focus:placeholder-opacity-100 focus:placeholder-[#ff00009f]"
            value={name}
            onChange={taskNameHandler}
          />
        </div>
        <div className="flex">
          <input
            type="submit"
            value={"Save Task"}
            className="btn btn-block bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
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

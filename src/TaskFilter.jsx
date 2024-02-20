import PropTypes from "prop-types";
import {useState } from "react";

//Adding Filter
const TaskFilter = (props) => {
  const tasks = props.tasks;
  const onFilter = props.onFilter;


  const [filter, setFilter] = useState("all");

  const filterChangeHandler = (event) => {


    const newFilter = event.target.value;
    setFilter(newFilter);
    filterTasks(newFilter);

    onFilter(filterTasks(newFilter));
  };




  const filterTasks = (filter) => {
     switch (filter) {
       case "all":
         return tasks;
       case "incomplete":
         return tasks.filter((task) => !task.completed);
       case "completed":
         return tasks.filter((task) => task.completed);
       default:
         return tasks;
     }
  };

  return (
    <div className="flex justify-center m-4">
      <label htmlFor="taskFilter" className="mr-2 font-medium text-gray-700">
        Filter Task
      </label>
      <select
        value={filter}
        name="taskFilter"
        id="taskFilter"
        onChange={filterChangeHandler}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};


TaskFilter.propTypes = {
  tasks: PropTypes.array,
  onFilter: PropTypes.func
};


export default TaskFilter;


//Adding Task Filter
const TaskFilter = () => {

    
  return (
    <div className="flex justify-center m-4">
      <label htmlFor="taskFilter" className="mr-2 font-medium text-gray-700">
        Filter Task
      </label>
      <select
        name="taskFilter"
        id="taskFilter"
        // onChange={}
        defaultValue={"all"}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default TaskFilter

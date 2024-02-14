// TaskItem.jsx
import propTypes from "prop-types";

const TaskItem = (props) => {
  const onDelete = props.onDelete;
  const onToggle = props.onToggle;
  
  // const clickHandler = () =>{
  //     console.log('clicked')
  // }

  const toggleHandler = () => {
       onToggle(task.id)
  }

  const deleteHandler = () => {
    onDelete(task.id);
   };
  const task = props.task;

   return (
     <div
       className={`task ${
         task.completed ? "bg-gray-200" : ""
       } px-6 py-3 flex justify-between items-center`}
     >
       <div onClick={toggleHandler} className="flex items-center">
         <input
           type="checkbox"
           checked={task.completed}
           onChange={toggleHandler}
         />
         <span className= {`ml-1 font-semibold ${task.completed ? "text-[#cf0202c2] line-through" : undefined}`}>
           {task.name}
         </span>
       </div>
       <button
         onClick={deleteHandler}
         className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
       >
         Delete
       </button>
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
  onToggle:propTypes.func
};
export default TaskItem;

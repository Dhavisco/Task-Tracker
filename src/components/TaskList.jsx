// TaskList.jsx
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

TaskList.propTypes = {
  tasks: PropTypes.array,
};


function TaskList(props) {
const tasks = props.tasks;
  return (
    <div className="row">
      <div className="col-12 pl-6">
        {tasks.map((task) => {
          return <TaskItem task={task} key={task.id}></TaskItem>;
        })}
      </div>
    </div>
  );
}


export default TaskList;

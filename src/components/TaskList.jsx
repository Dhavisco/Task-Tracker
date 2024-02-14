// TaskList.jsx
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";



function TaskList(props) {
const tasks = props.tasks;
const onDelete = props.onDelete;
const onToggle = props.onToggle;


  return (
    <div className="row">
      <div className="col-12 pl-6">
        {tasks.map((task) => {
          return <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} key={task.id}></TaskItem>;
        })}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onToggle: PropTypes.array,
};

export default TaskList;

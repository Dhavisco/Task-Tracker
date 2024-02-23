// TaskList.jsx
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { useEffect, useState } from "react";

function TaskList(props) {
  const tasks = props.tasks;
  const onDelete = props.onDelete;
  const onToggle = props.onToggle;
  const onEdit = props.onEdit;

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  //Update filteredTasks whenever the tasks prop changes
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const onFilter = (filtered) => {
    setFilteredTasks(filtered);
    // console.log(filtered);
  };

  return (
    <div className="row">
      <TaskFilter tasks={tasks} onFilter={onFilter} />
      <div className="col-12 lg:pl-6">
        {filteredTasks.map((task) => {
          return (
            <TaskItem
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
              key={task.id}
            ></TaskItem>
          );
        })}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  onEdit: PropTypes.func,
};

export default TaskList;

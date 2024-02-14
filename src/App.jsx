// App.jsx

import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {

  //State to control Task Input
  const [tasks, setTasks] = useState([
    {
      name: "Learn React",
      id: 1,
      date: "2023-01-02 10:00",
      completed: true,
    },
    { name: "Read ", id: 2, date: "2023-01-01 15:00", completed: null  },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <div className="container">
        <TaskForm onAdd={addTask}></TaskForm>
        <TaskList tasks={tasks}></TaskList>
      </div>
    </div>
  );
}

export default App;

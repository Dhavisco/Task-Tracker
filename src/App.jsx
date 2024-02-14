// App.jsx

import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
//Other features I am thinking of adding:
//Date

  const dummy = [
    {
      name: "Learn React",
      id: 1,
      date: "2023-01-02 10:00",
      completed: true,
    },
    { name: "Read ", id: 2, date: "2023-01-01 15:00", completed: null },
  ];
  //State to control Task Input
  const [tasks, setTasks] = useState(dummy);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id)); 
   //loops over the tasks array and test each element (each task). 
   //It returns true if the task should remain in the array, and false if it should be removed. 
   //The test is (task) => task.id !== id, meaning that the function keeps only those tasks whose id does not match the id of the task to be deleted. 
   //the task with the matching id is excluded from the new array.
 }

 const toggleTask = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
  //maps through each element and makes changes to the current ID element.
  //It returns the inverse of the completed status, meaning, if it was formally true, it changes to false and vice versa.
  //If the ID does not match, it simply returns the current task unchanged
  // The new state is re rendered.
 }

  return (
    <div className="App">
      <div className="container">
        <TaskForm onAdd={addTask}></TaskForm>
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}></TaskList>
      </div>
    </div>
  );
}

export default App;

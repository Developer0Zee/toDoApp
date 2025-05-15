import Header from "./Components/Header";
import { useState } from "react";
import ToDoList from "./Components/ToDoList";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleClick() {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    } else {
      alert("Please enter something to add");
    }
  }

  function handleDelete(deleteIndex) {
    const updatedList = taskList.filter((_, index) => index !== deleteIndex);
    setTaskList(updatedList);
  }

  function handleEdit(text, EditIndex) {
    if (text.trim() !== "") {
      const updatedList = [...taskList];
      updatedList[EditIndex] = text;
      setTaskList(updatedList);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="task-input">
        <label htmlFor="tasks">Add Task</label>
        <input
          type="text"
          id="tasks"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <ToDoList data={taskList} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;

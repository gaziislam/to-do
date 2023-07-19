import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  let handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setTask([...task, inputValue]);
    setInputValue("");

    // console.log(task);
  };

  const handleDelete = (e) => {
    setTask(
      task.filter((d) => {
        return d !== e;
      })
    );

    // console.log(task);
  };

  return (
    <>
      <div className="container">
        <h1>To-Do App</h1>
        <div className="todo-app">
          <div className="row">
            <input
              onChange={handleChange}
              type="text"
              id="input-box"
              placeholder="Add a task"
            />
            <button className="add-btn" onClick={handleAdd}>
              Add
            </button>
          </div>
          {task.map((item, index) => (
            <ul id="task-list" key={index}>
              <li className="">
                {item} <button onClick={() => handleDelete(item)}>X</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addItem() {
    setTodos(prevTodos => {
      console.log(input);
      return [...prevTodos, input];
    });
    setInput("");
    console.log(todos);
  }

  function removeItem(id) {
    setTodos(prevTodos => {
      return prevTodos.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChange={removeItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === "") {
      return ;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setToDo("");
  }        
  return (
    <div>
      <h2>My ToDos({todos.length})</h2>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="write toDo" value={todo}></input>
        <button>submit</button>
      </form>
      <ul>
        {todos.map( (item, index) => <li
        key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;

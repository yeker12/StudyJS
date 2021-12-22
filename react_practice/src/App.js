import React, { useEffect, useState } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return ;
    };
    setToDo("");
    setToDos((currentArray) => 
      [toDo, ...currentArray]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <h1>To Do List ({toDos.length})</h1>
        <input
        onChange = {onChange}
        value={toDo}
        type = "text"
        placeholder="write your to do..."></input>
        <button>Add To Do</button>
      
        <hr />
        <ul>
          {toDos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </form>
    
    
  );
}

export default App;

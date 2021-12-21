import Button from "./button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time!");
  const iRunOnlyOnce = () => {
    console.log("I run only once!");
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
      onChange={onChange} 
      type="text"
      placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick = {onClick}>click me</button>
    </div>
  );
}

export default App;

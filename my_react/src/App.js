import { useEffect, useState } from "react";

function SayHello() {
  useEffect( () => {
    console.log("Hi! :)");
    return () => {console.log("bye :(")
  };
  }, []);
  return <h2>hello!</h2>
  
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClickShowing = () => setShowing((prev) => !prev);

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
      <div>
        <button onClick = {onClickShowing}>{showing ? "Hide" : "Show"}</button>
        {showing ? <SayHello /> : null}
      </div>
      <div>
      <input
      onChange={onChange} 
      type="text"
      placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick = {onClick}>click me</button>
      </div>
    </div>
  );
}

export default App;

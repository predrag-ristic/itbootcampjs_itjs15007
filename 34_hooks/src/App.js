import "./App.css";
import { useState } from "react";
// import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

function App() {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState(1);

  return (
    <div className="App">
      {/* <Counter /> */}
      <br />
      {show ? <Counter1 /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <br />

      {/* Ternary operator nesting */}
      <button onClick={() => setNumber(() => number + 1)}>
        {number === 1 ? "jedan" : number % 2 === 0 ? "dva" : "tri"}
      </button>
    </div>
  );
}

export default App;

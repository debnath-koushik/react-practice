import { useState } from "react";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import { UseStateHookPart1 } from "./components/UseStateHook/UseStateHookPart1";
import UseStateHookPart2 from "./components/UseStateHook/UseStateHookPart2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FunctionalComponent /> */}
      {/* <UseStateHookPart1 /> */}
      <UseStateHookPart2 />
    </>
  );
}

export default App;

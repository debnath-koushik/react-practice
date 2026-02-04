import { useState } from "react";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import { UseStateHookPart1 } from "./components/UseStateHook/UseStateHookPart1";
import { UseStateHookUpdatingObjects } from "./components/UseStateHook/UseStateHookUpdatingObjects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FunctionalComponent /> */}
      {/* <UseStateHookPart1 /> */}
      <UseStateHookUpdatingObjects />
    </>
  );
}

export default App;

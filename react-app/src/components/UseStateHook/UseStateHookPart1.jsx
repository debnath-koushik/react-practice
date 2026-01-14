// Importing useState from React
// useState is a Hook that lets us store and update data (state) inside a functional component
import { useState } from "react";

// Creating a React functional component
// Components are reusable pieces of UI
export const UseStateHookPart1 = () => {
  // -------------------- useState Hook --------------------

  // useState syntax:
  // const [stateVariable, setterFunction] = useState(initialValue)

  // count → state variable (stores the current value)
  // setCount → function used to update the count value
  // 0 → initial value of count when the component first renders
  const [count, setCount] = useState(0);

  // -------------------- Increment Function --------------------

  // This function increases the count value
  // We use the "functional update" form of setCount
  // This is important because React may batch state updates together
  function onIncrementCount() {
    // count => count + 1
    // This ensures we always get the latest value of count
    // Each call updates the count one step at a time
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  // -------------------- Decrement Function --------------------

  // This function decreases the count value
  // Again, we use the functional update to avoid stale state issues
  function onDecrementCount() {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  }

  // -------------------- JSX (UI Rendering) --------------------

  return (
    <>
      {/* Heading for the component */}
      <h1>UseState Hook Part 1</h1>

      {/* Displaying the current count value */}
      <p>Count value is: {count}</p>

      {/* 
        Button to increment count by 1
        This uses the current count value directly
        Good for single updates
      */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* Button to decrement count by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>

      {/* 
        Button that calls the function which increments count 3 times
        Demonstrates why functional updates are important
      */}
      <button onClick={onIncrementCount}>Increment Count2</button>

      {/* Button that decrements count 3 times */}
      <button onClick={onDecrementCount}>Decrement Count2</button>
    </>
  );
};

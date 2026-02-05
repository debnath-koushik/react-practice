import React from "react";
import { useState } from "react";

// a state variable is always local to the component, so we can't access it from outside the component
// const AddButton = (props) => {
// we can also destructure the props inside the function parameter
const AddButton = ({ count, setCount }) => {
  //   const [count, setCount] = useState(0);
    // console.log(props);
    
    // destructuring the props
    // const { count, setCount } = props;

  const onIncrementClick = () => {
    setCount(count + 1);
  };

//   return <button onClick={onIncrementClick}>Increment {count}</button>;
//   return <button onClick={onIncrementClick}>Increment {props.count}</button>;
  return <button onClick={onIncrementClick}>Increment</button>;
};

const DecrementButton = (props) => {
  // const [count, setCount] = useState(0);

  const onDecrementClick = () => {
    props.setCount(props.count - 1);
  };

//   return <button onClick={onDecrementClick}>Decrement {count}</button>;
//   return <button onClick={onDecrementClick}>Decrement {props.count}</button>;
  return <button onClick={onDecrementClick}>Decrement</button>;
};

const UseStateHookPart2 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* What if we want to access the count variable from outside the component? */}
      {/* For accessing the count variable from outside the component we can use the useState hook in the parent component. And we can pass the count variable to the child component as a props. */}
      {/* props => props is used to pass the data from the parent component to the child component. */}
      <div>Count: {count}</div>
      <AddButton count={count} setCount={setCount} />
      <DecrementButton count={count} setCount={setCount} />
    </>
  );
};

export default UseStateHookPart2;

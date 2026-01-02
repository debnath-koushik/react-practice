import { useState } from "react";

let count = 0;
let text = "";

function FunctionalComponent() {
  const onIncrementCount = () => {
    count = count + 1;
    console.log({ count });
  };

  const onSearchChange = (event) => {
    text = event.target.value;
    console.log(text);
  };

  // Functional Component
  /*
    Functional componet write as like "MyFunction" if I write it as "myFunction" then it consider as function not as a Functional Component and a Functional Component should return a markup language.
     */
  function MyButton() {
    return <button>Submit</button>;
  }

  return (
    <>
      <h1>Functional component</h1>

      {/* Use count variable inside the jsx */}
      <p>My `count` variable value is: {count}</p>

      {/* create a button to increment count value */}
      <button id="btn" onClick={onIncrementCount}>
        Increment
      </button>
      <p>
        count: {count} <strong>#check console</strong>
      </p>
      <h3>
        # above we see when I click on the button the value of `count` is
        updated but it does not reflect on the page that solved using useState
        hook
      </h3>

      {/* fetch input field data */}
      <div>
        <input
          type="search"
          onChange={onSearchChange}
          placeholder="search and check console"
        />
      </div>
      <br />
      {/* Use Functional Component */}
      <MyButton />
    </>
  );
}

export default FunctionalComponent;

import { useState } from "react";

let count = 0;
let text = "";

// conditional rendering variable
let loading = false;

// list
let arr = ["AAA", "BBB", "CCC", "DDD"];

// list in object formate
let arr2 = [
  { id: 1, name: "AAA" },
  { id: 2, name: "BBB" },
  { id: 3, name: "CCC" },
  { id: 4, name: "DDD" },
];

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

  // or,

  const Button = () => <button>Submit</button>;

  function DemoFunction() {
    return (
      // When we create a Functional Component with many html elements there must be a parrent element, without it we get an error, For example -
      <>
        <h1>
          This is another Functional Component where I put many html elements
        </h1>
        <button>Submit</button>
      </>
    );
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
      <Button />
      {/* Conditional rendering */}
      {loading ? <p>Page Loaded</p> : <p>Loaing...</p>}
      {/* Rendering List */}
      /* In react for printing a list we didn't use loop we used hired order
      function */
      {
        // we have to give a unique key to the list item, so that react can identify the item, for example -
        // <p key={index}>{item}</p>
        // key always used in a parent element, not in a child element, for example -
        // <div key={index}>
        //   <p>{item}</p>
        // </div>
        arr.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      }
        {/* /* there is a loopwhole to used this index value in the list item, for example - if we delete the item from the list, the index value will be changed, so we have to use a unique key to the list item, so that react can identify the item.So did not write a list let arr = ["AAA", "BBB", "CCC", "DDD"]; this way we can write in object formate for example - let arr = [
          { id: 1, name: "AAA" },
          { id: 2, name: "BBB" },
          { id: 3, name: "CCC" },
          { id: 4, name: "DDD" },
      ]; */}
      <div>List using as a object formate</div>
      {
        // and then we can write the list item like this -
        // and also put conditional css rendring
        arr2.map(item => (
          <p className={`${item.id & 1 ? "red" : "blue"} margin-8px`} key={item.id}>{item.name}</p>
        ))
      }
    </>
  );
}

export default FunctionalComponent;

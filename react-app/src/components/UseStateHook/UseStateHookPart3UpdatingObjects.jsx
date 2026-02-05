import React from "react";
import { useState } from "react";

export const UseStateHookPart3UpdatingObjects = () => {
  // Initial state object for the form
  // This will hold all form input values
  const initialState = {
    name: "",
    password: "",
    email: "",
    phone: "",
  };

  // useState hook
  // formData -> current state (object)
  // setFormData -> function to update the state
  const [formData, setFormData] = useState(initialState);

  // Runs when the Name input changes
  const onNameChange = (e) => {
    // Spread operator (...) copies existing values
    // Then we update ONLY the name field
    setFormData({ ...formData, name: e.target.value });
  };

  // Runs when the Password input changes
  const onPassChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  // Runs when the Email input changes
  const onEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  // Runs when the Phone input changes
  const onphoneChange = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };

  // Logs the current form data to the console
  // Helpful for debugging and understanding state updates
  console.log(formData);

  return (
    <>
      <div>
        <label htmlFor="">Name</label>
        <input onChange={onNameChange} placeholder="Enter your name" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input onChange={onPassChange} placeholder="Enter your password" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input onChange={onEmailChange} placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="">Phone</label>
        <input onChange={onphoneChange} placeholder="Enter your phone number" />
      </div>
    </>
  );
};

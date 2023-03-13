import React, { useState } from "react";
import "./addTodo.css";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: inputValue,
        completed: false,
      }),
    })
      .then((res) => console.log("ok"))
      .catch((err) => console.log(err));

    setInputValue("");
  };

  return (
    <div className="box">
      <form className="addTodo">
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;

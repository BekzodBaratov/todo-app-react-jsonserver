import React from "react";
import { useForm } from "../hooks/useForm";
import "./addTodo.css";

const AddTodo = () => {
  const [value, setValue] = useForm({ inputValue: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title: value.inputValue, completed: false }),
    })
      .then((res) => console.log("ok"))
      .catch((err) => console.log(err));

    setValue({ target: { name: "inputValue", value: "" } });
  };

  return (
    <div className="box">
      <form className="addTodo">
        <input name="inputValue" value={value.inputValue} onChange={setValue} type="text" />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;

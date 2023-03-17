import React, { useState, useEffect } from "react";
import { useInfoContext } from "../context/InfoContext";
import "./showTodo.css";

const ShowTodo = () => {
  const { data, check, setCheck } = useInfoContext();
  const updData = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "PATCH",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title: "sallom" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setCheck(!check);
  };
  const delData = (id) => {
    fetch("http://localhost:3000/todos/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <ul className="lists">
      {data.map((todo) => {
        return (
          <li className="list" key={todo.id}>
            {todo.title}

            <div>
              <span onClick={() => updData(todo.id)} className="upd">
                Upd
              </span>
              <span onClick={() => delData(todo.id)} className="del">
                Del
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowTodo;

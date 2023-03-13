import React, { useState, useEffect } from "react";
import "./showTodo.css";

const ShowTodo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const updData = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "PATCH",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title: "sallom" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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

import React from "react";
import AddTodo from "../components/AddTodo";
import ShowTodo from "../components/ShowTodo";
import "./welcome.css";

const Welcom = () => {
  return (
    <div className="welcom">
      <header className="header">
        <AddTodo />
      </header>
      <section>
        <ShowTodo />
      </section>
    </div>
  );
};

export default Welcom;

import React from "react";
import AddTodo from "../components/AddTodo";
import ShowTodo from "../components/ShowTodo";
import "./welcome.css";

const Welcom = () => {
  const [check, setCheck] = React.useState(false);

  return (
    <div className="welcom">
      <header className="header">
        <AddTodo check={check} setCheck={setCheck} />
      </header>
      <section>
        <ShowTodo check={check} setCheck={setCheck} />
      </section>
    </div>
  );
};

export default Welcom;

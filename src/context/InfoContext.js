import React, { useContext, useEffect, useState, createContext } from "react";

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoContextProvider = ({ children }) => {
  const [check, setCheck] = React.useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [check]);

  const value = {
    check,
    setCheck,
    data,
    setData,
  };

  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  );
};

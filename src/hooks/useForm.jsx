import { useState } from "react";

export const useForm = (initialState) => {
  const [value, setValue] = useState(initialState);
  console.log(value);
  return [
    value,
    (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    },
  ];
};

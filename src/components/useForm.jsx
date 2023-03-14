import { useState } from "react";

export const useForm = (initialState) => {
  const [value, setValue] = useState(initialState);

  return [
    value,
    (e) => {
      console.log(e.target);
      setValue({ ...value, [e.target.name]: e.target.value });
    },
  ];
};

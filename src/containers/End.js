import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const End = () => {
  const { user } = useContext(FormContext);

  return (
    <div>
      <p>The end - thanks for your participation</p>
      <p>{user.name}</p>
    </div>
  );
};

export default End;

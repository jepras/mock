import React, { useContext, useState } from "react";
import { FormContext } from "../contexts/FormContext";

const NameForm = () => {
  const { addUser } = useContext(FormContext);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NameForm;

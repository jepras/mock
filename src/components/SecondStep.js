import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import micro from "../assets/media/micro.png";
import { FormContext } from "../contexts/FormContext";

const SecondStep = props => {
  /* context */
  const { addUser, user } = useContext(FormContext);

  /* props */
  const { handleNext } = props;

  /* state */
  const [showLabel, setShowLabel] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [order, setOrder] = useState({ first: "", second: "" });

  /* functions */
  const handleSubmit = e => {
    e.preventDefault();
    addUser(name, color, order);
    setName("");
    setColor("");
    setOrder({ first: "", second: "" });
  };

  return (
    <div>
      <div class="button-placement step-one">
        {!showLabel && (
          <button
            className="button"
            color="primary"
            onClick={() => setShowLabel(!showLabel)}
          >
            Next
          </button>
        )}
        {showLabel && (
          <div className="button-placement-label">
            <p>this is a label</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="color"
                value={color}
                onChange={e => setColor(e.target.value)}
              />
              <label>What is most important to you?</label>
              <input
                type="text"
                placeholder="this one first"
                value={order.first}
                onChange={e => {
                  const val = e.target.value;
                  setOrder(prevState => {
                    return { ...prevState, first: val };
                  });
                }}
              />
              <input
                type="text"
                placeholder="this one last"
                value={order.second}
                onChange={e => {
                  const val = e.target.value;
                  setOrder(prevState => {
                    return { ...prevState, second: val };
                  });
                }}
              />
              <input type="submit" value="add user" />
            </form>
          </div>
        )}
        {user.name && (
          <button className="button" color="primary" onClick={handleNext}>
            Next
          </button>
        )}
      </div>

      {/* Image goes last */}
      <img alt="screenshot" className="screenshot" src={micro} />
    </div>
  );
};

export default withRouter(SecondStep);

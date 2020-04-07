import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import black from "../assets/media/blackestblack.png";
import { FormContext } from "../../contexts/FormContext";

const FourthStep = props => {
  const [value, setValue] = React.useState();
  const [future, setFuture] = React.useState([
    {
      label: "Future one",
      value: "Future one",
      chosen: false
    },
    { label: "Future two", value: "Future two", chosen: false },
    {
      label: "Back to the future? Ô_ô",
      value: "Back to the future? Ô_ô",
      chosen: false
    }
  ]);

  const [choices, setChoices] = React.useState([
    {
      label: "Optimistic",
      value: "Optimistic",
      chosen: false
    },
    { label: "Hopeful", value: "Hopeful", chosen: false },
    { label: "Bananas", value: "Bananas", chosen: false }
  ]);

  /* context */
  const { addPreferences } = useContext(FormContext);

  /* props */
  const { handleNext } = props;

  /* state */
  const [showLabel, setShowLabel] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  /* functions */
  const handleSubmit = e => {
    e.preventDefault();
    console.log("future", future);
    /* addPreferences(choices, future); */
  };

  return (
    <div>
      <div className="button-placement step-one">
        <button className="button" color="primary" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="center-div">
        <div className="content">
          <label>How do you feel?</label>
          <select
            className="select"
            onChange={e => setValue(e.currentTarget.value)}
          >
            {choices.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="center-div" style={{ top: "20vh" }}>
        <div className="content control">
          <label className="label">Choose wisely young one</label>
          {future.map(item => (
            <div>
              <label className="radio">{item.label}</label>
              <input type="radio" key={item.value} value={item.value} />
            </div>
          ))}
        </div>
      </div>

      {/* Image goes last */}
      <img alt="screenshot" className="screenshot" src={black} />
    </div>
  );
};

export default withRouter(FourthStep);

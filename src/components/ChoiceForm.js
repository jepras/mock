import React from "react";
import { withRouter } from "react-router-dom";

const ChoiceForm = props => {
  // eslint-disable-next-line
  const [value, setValue] = React.useState();
  // eslint-disable-next-line
  const [future, setFuture] = React.useState([
    {
      label: "Usual routine",
      value: "Usual routine"
    },
    { label: "Explore new path", value: "Explore new path" }
  ]);

  /* context */

  /* props */
  const { handleNext } = props;

  /* state */

  /* functions */

  return (
    <div>
      <div
        className="button-placement step-one"
        style={{ backgroundColor: "#000", height: "30vh" }}
      >
        <h2 className="subtitle">What do you want to?</h2>
        <div className="center-div">
          <div className="content control">
            <label className="label">Choose wisely young one</label>
            {future.map(item => (
              <div key={item.value}>
                <label className="radio">{item.label}</label>
                <input type="radio" value={item.value} />
              </div>
            ))}
          </div>
        </div>
        <button className="button" color="primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default withRouter(ChoiceForm);

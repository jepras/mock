import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import meso from "../assets/media/meso.png";
import { FormContext } from "../../contexts/FormContext";

const ThirdStep = props => {
  /* context */
  const { user } = useContext(FormContext);

  /* props */
  const { handleNext } = props;

  /* state */
  const [showLabel, setShowLabel] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <div>
      <div className="button-placement step-one">
        <button className="button" color="primary" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="center-div">
        <div className="content">
          {user.name && (
            <div>
              <h1 className="title" style={{ backgroundColor: "blue" }}>
                Welcome: {user.name}
              </h1>
              {user.order["first"] && (
                <div>
                  <p className="subtitle">
                    you{" "}
                    <span style={{ backgroundColor: "white" }}>
                      {user.order["first"]}
                    </span>{" "}
                    lover
                  </p>
                  <p>
                    don't worry, you won't get any{" "}
                    <span style={{ backgroundColor: "white" }}>
                      {user.order["second"]}
                    </span>
                    s from me
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image goes last */}
      <img alt="screenshot" className="screenshot" src={meso} />
    </div>
  );
};

export default withRouter(ThirdStep);

import React from "react";
import individual from "../assets/media/individual.png";

const FirstStep = props => {
  const { activeStep, handleBack, handleNext } = props;
  console.log("props", props);
  return (
    <div>
      <p className="on-image">text positioned with css</p>
      <div class="button-placement step-one">
        <button
          className="button"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </button>
        <button className="button" color="primary" onClick={handleNext}>
          Next
        </button>
      </div>
      <p className="absolute" style={{ top: "60vh", left: "75vw" }}>
        random text positioned with style
      </p>

      <div className="center-div">
        <div className="content">own centered text</div>
      </div>

      {/* Image goes last */}
      <img alt="screenshot" className="screenshot" src={individual} />
    </div>
  );
};

export default FirstStep;

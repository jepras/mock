import React, { useContext } from "react";
import { StepContext } from "../contexts/StepContext";
import NameForm from "../components/NameForm";
import whitesmokebottom from "../assets/media/vid/whitesmokebottom.mp4";

const Invitation = () => {
  const { handleNext } = useContext(StepContext);

  const Background = () => {
    return <video src={whitesmokebottom} autoPlay loop />;
  };

  const Content = () => {
    return (
      <div className="step-one">
        <p>
          If you want to take part in this, write your name, press submit and
          continue
        </p>
        <NameForm />
        <button className="button" color="primary" onClick={handleNext}>
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <Background />
      <Content />
    </>
  );
};

export default Invitation;

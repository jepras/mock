import React, { useContext, useEffect } from "react";
import { StepContext } from "../contexts/StepContext";
import opening from "../assets/media/vid/opening.mp4";

import Dot from "../components/Dot";
import InputForm from "../components/InputForm";

const Intro = () => {
  const { handleNext } = useContext(StepContext);

  useEffect(() => {
    console.log("Intro rendered");
    return () => {
      console.log("component cleaned up");
    };
  }, []);

  const Background = () => {
    return <video src={opening} loop autoPlay />;
  };

  const Overlay = () => {
    return (
      <>
        <div onClick={handleNext}>
          <Dot top="70vh" left="50%" />
        </div>

        <div className="center-div" style={{ marginTop: "20%" }}>
          <div
            className="content"
            style={{ position: "relative", width: "100%" }}
          >
            <p>
              You will be taken to the future, on a mission that nobody else can
              solve but you. Are you ready to travel?
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Background />
      <Overlay />
    </>
  );
};

export default Intro;

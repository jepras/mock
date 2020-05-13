import React, { useContext, useEffect } from "react";
import { StepContext } from "../contexts/StepContext";

import { Video } from "cloudinary-react";

import Dot from "../components/Dot";

const Intro = () => {
  const { handleNext } = useContext(StepContext);

  useEffect(() => {
    console.log("Intro rendered");
    return () => {
      console.log("component cleaned up");
    };
  }, []);

  const Background = () => {
    return (
      <>
        <Video
          cloudName="jepras"
          publicId="opening"
          poster="false"
          loop
          autoPlay
        />
      </>
    );
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

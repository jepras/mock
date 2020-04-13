import React, { useContext, useEffect } from "react";
import { StepContext } from "../contexts/StepContext";
/* import audioNews from "../assets/media/aud/audio-news.wav"; */
import linesFloating from "../assets/media/vid/lines-floating.mp4";

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
    return <video src={linesFloating} loop autoPlay />;
  };

  const Overlay = () => {
    return (
      <>
        <div onClick={handleNext}>
          <Dot top="30vh" left="70%" />
        </div>

        <div className="center-placement">
          <InputForm />
        </div>
      </>
    );
  };

  const Audio = () => {
    return null;
    {
      /* <audio controls autoPlay src={audioNews} style={{ display: "none" }}>
Your browser does not support the
<code>audio</code> element.
</audio> */
    }
  };

  return (
    <>
      <Background />
      <Overlay />

      <Audio />
    </>
  );
};

export default Intro;

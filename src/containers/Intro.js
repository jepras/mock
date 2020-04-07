import React, { useContext } from "react";
import { StepContext } from "../contexts/StepContext";
import audioNews from "../assets/media/aud/audio-news.wav";
import NameForm from "../components/NameForm";

const Intro = () => {
  const { handleNext } = useContext(StepContext);

  return (
    <div>
      <p>Intro</p>
      {/* <audio controls autoPlay src={audioNews} style={{ display: "none" }}>
        Your browser does not support the
        <code>audio</code> element.
      </audio> */}
      <NameForm />
      <button className="button" color="primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Intro;

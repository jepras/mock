import React from "react";
import { Link } from "react-router-dom";
import "./Test.css";
import floatingBlob from "../assets/media/vid/floatingblob.mp4";

import Plotly from "plotly.js-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const Test = () => {
  const testFunction = () => {
    console.log("test!!");
  };
  return (
    <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default Test;

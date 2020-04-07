import React from "react";
import Graph from "react-graph-vis";
import { lesNodes, lesEdges } from "../assets/les";

/* import "./styles.css";
import "./network.css"; */

function GraphVis() {
  const graph = {
    nodes: lesNodes,
    edges: lesEdges
  };

  const options = {
    edges: {
      color: "#000000"
    },
    nodes: {
      shape: "dot",
      size: 16
    },
    height: "500px",
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: { iterations: 150 }
    }
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <div>
      <h1>example graph from les miserables</h1>

      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    </div>
  );
}

export default GraphVis;

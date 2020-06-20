import React from 'react';
import Graph from 'react-graph-vis';

import './VisGraph.css';

const VisGraph = (props) => {
  console.log('this.props: ', props);
  const graph = {
    nodes: props.nodesArr,
    edges: props.edgesArr,
  };

  const options = {
    edges: {
      color: { inherit: true },
      width: 0.15,
      smooth: {
        type: 'continuous',
      },
    },
    nodes: {
      shape: 'dot',
      size: 16,
    },
    height: '500px',
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
      },
      maxVelocity: 146,
      solver: 'forceAtlas2Based',
      timestep: 0.35,
      stabilization: { iterations: 150 },
    },
    interaction: { hover: true },
    manipulation: {
      enabled: true,
    },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
      console.log('Selected nodes:');
      console.log(nodes);
    },
  };

  return (
    <div>
      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={(network) => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    </div>
  );
};

export default VisGraph;

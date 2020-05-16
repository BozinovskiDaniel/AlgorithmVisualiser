import React from "react";

function Node(props) {
  const { isStartNode, isEndNode, col, row } = props.node;

  const extraClassName = isStartNode
    ? "start-node"
    : isEndNode
    ? "end-node"
    : null;

  return <div className={`node ${extraClassName}`} />;
}

export default Node;

import React from "react";

function Node(props) {
  const { isStart, isEnd, isVisited } = props.node;

  const extraClassName = isStart ? "start-node" : isEnd ? "end-node" : null;

  return <div className={`node ${extraClassName}`} />;
}

export default Node;

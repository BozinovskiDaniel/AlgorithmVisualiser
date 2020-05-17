import React from "react";

function Node(props) {
  const { isStart, isEnd, isVisited, isWall, row, col } = props.node;

  const { onMouseDown, onMouseUp, onMouseEnter } = props;

  const extraClassName = isStart
    ? "start-node"
    : isEnd
    ? "end-node"
    : isVisited
    ? "visited-node"
    : isWall
    ? "node-wall"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseUp={() => onMouseUp()}
      onMouseEnter={() => onMouseEnter(row, col)}
    />
  );
}

export default Node;

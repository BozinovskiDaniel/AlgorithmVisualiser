import React from "react";

// Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

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
    >
      {isStart ? (
        <ChevronRightIcon className="start-icon" />
      ) : isEnd ? (
        <RadioButtonCheckedIcon className="end-icon" />
      ) : null}
    </div>
  );
}

export default Node;

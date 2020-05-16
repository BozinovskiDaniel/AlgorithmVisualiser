import React, { useState, useEffect } from "react";
import Node from "../components/Node";

function PathfindingAlgorithms() {
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    const grid = [];

    for (let row = 0; row < 20; row++) {
      const rows = [];
      for (let col = 0; col < 50; col++) {
        const currNode = {
          col,
          row,
          isStartNode: col === 5 && row === 5,
          isEndNode: col === 35 && row === 5,
        };
        rows.push(currNode);
      }
      grid.push(rows);
    }
    setGrid(grid);
  }, []);
  return (
    <div className="grid">
      {grid
        ? grid.map((row) => {
            return row.map((node, nodeIndex) => {
              return <Node key={nodeIndex} node={node} />;
            });
          })
        : null}
    </div>
  );
}

export default PathfindingAlgorithms;

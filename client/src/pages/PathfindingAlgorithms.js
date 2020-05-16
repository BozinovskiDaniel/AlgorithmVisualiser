import React, { useState, useEffect } from "react";
import Node from "../components/Node";

// Algorithms
import { dijkstra } from "../components/pathFindingAlgorithms/dijkstras";

// Global vars
const START_ROW = 10;
const START_COL = 15;
const FINISH_ROW = 10;
const FINISH_COL = 35;

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

  const dijkstrasAlgorithm = () => {
    const startNode = grid[START_ROW][START_COL];
    const finishNode = grid[FINISH_ROW][FINISH_COL];
    const visitedNodesInorder = dijkstra(grid, startNode, finishNode);
    console.log(visitedNodesInorder);
  };

  return (
    <>
      <button onClick={() => dijkstrasAlgorithm()}>
        Visualise Dijkstra's Algorithm
      </button>
      <div className="grid">
        {grid
          ? grid.map((row) => {
              return row.map((node, nodeIndex) => {
                return <Node key={nodeIndex} node={node} />;
              });
            })
          : null}
      </div>
    </>
  );
}

export default PathfindingAlgorithms;

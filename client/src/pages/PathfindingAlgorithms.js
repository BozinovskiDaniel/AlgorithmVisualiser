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
        rows.push(createNode(col, row));
      }
      grid.push(rows);
    }
    setGrid(grid);
  }, []);

  const animateDijkstras = (visitedNodesInorder) => {
    for (const node of visitedNodesInorder) {
      const newGrid = grid.slice();
      const newNode = {
        ...node,
        isVisited: true,
      };
      newGrid[node.row][node.col] = newNode;
      setTimeout(() => {
        setGrid(newGrid);
      }, 100);
    }
  };

  const dijkstrasAlgorithm = () => {
    const startNode = grid[START_ROW][START_COL];
    const endNode = grid[FINISH_ROW][FINISH_COL];
    const visitedNodesInorder = dijkstra(grid, startNode, endNode);
    animateDijkstras(visitedNodesInorder);
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

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_ROW && col === START_COL,
    isEnd: row === FINISH_ROW && col === FINISH_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

export default PathfindingAlgorithms;

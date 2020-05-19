import React, { useState, useEffect, Fragment } from "react";
import Node from "../components/Node";
import Navbar from "../components/layout/Navbar";

// Algorithms
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../components/pathFindingAlgorithms/dijkstras";

// Global vars
const START_ROW = 10;
const START_COL = 15;
const FINISH_ROW = 10;
const FINISH_COL = 29;

function PathfindingAlgorithms() {
  const [grid, setGrid] = useState(null);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  useEffect(() => {
    const grid = [];

    for (let row = 0; row < 19; row++) {
      const rows = [];
      for (let col = 0; col < 46; col++) {
        rows.push(createNode(col, row));
      }
      grid.push(rows);
    }
    setGrid(grid);
  }, []);

  const handleMouseDown = (row, col) => {
    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const animateDijkstras = (visitedNodesInorder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInorder.length; i++) {
      if (i === visitedNodesInorder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 20 * i);
        return;
      }

      setTimeout(() => {
        const node = visitedNodesInorder[i];
        const newGrid = grid.slice();
        const newNode = {
          ...node,
          isVisited: true,
        };
        newGrid[node.row][node.col] = newNode;
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node visited-node";
        //setGrid(newGrid);
      }, 20 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        // Set the node class
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node shortestPath-node";
      }, 50 * i);
    }
  };

  const dijkstrasAlgorithm = () => {
    const startNode = grid[START_ROW][START_COL];
    const endNode = grid[FINISH_ROW][FINISH_COL];
    const visitedNodesInorder = dijkstra(grid, startNode, endNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    animateDijkstras(visitedNodesInorder, nodesInShortestPathOrder);
  };

  const mapping = (row) => {
    return row.map((node, nodeIndex) => (
      <Node
        key={nodeIndex}
        node={node}
        onMouseDown={() => handleMouseDown(node.row, node.col)}
        onMouseUp={() => handleMouseUp()}
        onMouseEnter={() => handleMouseEnter(node.row, node.col)}
      />
    ));
  };

  return (
    <div className="pathfindingContainer">
      <Navbar callDijkstras={dijkstrasAlgorithm} />
      <div className="grid">
        {grid
          ? grid.map((row) => {
              return (
                <Fragment>
                  {mapping(row)}
                  <br />
                </Fragment>
              );
            })
          : null}
      </div>
    </div>
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

const getGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default PathfindingAlgorithms;

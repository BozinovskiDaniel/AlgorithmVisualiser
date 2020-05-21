import React, { useState, useEffect, Fragment } from "react";
import Node from "../components/Node";
import Legend from "../components/Legend";
import Navbar from "../components/layout/Navbar";
import Typography from "@material-ui/core/Typography";

// Algorithms
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../components/pathFindingAlgorithms/dijkstras";

import { performDFS } from "../components/pathFindingAlgorithms/depthFirstSearch";
import { performBFS } from "../components/pathFindingAlgorithms/breadthFirstSearch";
import { performAStar } from "../components/pathFindingAlgorithms/aStar";

// Global vars
const START_ROW = 10;
const START_COL = 15;
const FINISH_ROW = 10;
const FINISH_COL = 29;

function PathfindingAlgorithms() {
  const [grid, setGrid] = useState(null);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [gridHeight, setGridHeight] = useState(null);
  const [gridWidth, setGridWidth] = useState(null);

  useEffect(() => {
    const grid = [];
    const width = window.innerWidth;
    const height = window.innerHeight;
    const gridHeight = height / 46;
    const gridWidth = width / 35;
    setGridHeight(gridHeight);
    setGridWidth(gridWidth);

    for (let row = 0; row < gridHeight; row++) {
      const rows = [];
      for (let col = 0; col < gridWidth; col++) {
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
        }, 10 * i);
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
      }, 10 * i);
    }
  };

  const animateBFS = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const newGrid = grid.slice();
        const newNode = {
          ...node,
          isVisited: true,
        };
        newGrid[node.row][node.col] = newNode;
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node visited-node";
        //setGrid(newGrid);
      }, 10 * i);
    }
  };

  // Animate the Depth First Search Algorithm
  const animateDFS = (visitedNodesInOrder, startNode, endNode) => {
    console.log(visitedNodesInOrder);
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      if (visitedNodesInOrder[i - 1] === endNode) {
        setTimeout(() => {
          animatePath(visitedNodesInOrder, startNode, endNode);
        }, 10 * i);
        return;
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const newGrid = grid.slice();
        const newNode = {
          ...node,
          isVisited: true,
        };
        newGrid[node.row][node.col] = newNode;
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node visited-node";
      }, 10 * i);
    }
  };

  const getNodesInOrder = (startNode, endNode) => {
    const nodesInShortestPathOrder = [];

    let currentNode = endNode;
    while (currentNode !== startNode) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  };

  // Animate the path after the algorithm is complete
  const animatePath = (visitedNodesInOrder, startNode, endNode) => {
    const nodesInOrder = getNodesInOrder(startNode, endNode);

    for (let i = 0; i < nodesInOrder.length; i++) {
      if (nodesInOrder[i - 1] === endNode) return;
      setTimeout(() => {
        // Set the node class
        const node = nodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node shortestPath-node";
      }, 50 * i);
    }
  };

  // Animates the Shortest path for dijkstras
  const animateShortestPath = (nodesInShortestPathOrder, endNode) => {
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

  const dfsAlgorithm = () => {
    const startNode = grid[START_ROW][START_COL];
    const endNode = grid[FINISH_ROW][FINISH_COL];
    const visitedNodesInOrder = performDFS(
      grid,
      startNode,
      endNode,
      gridHeight,
      gridWidth
    );
    animateDFS(visitedNodesInOrder, startNode, endNode);
  };

  const bfsAlgorithm = () => {
    const startNode = grid[START_ROW][START_COL];
    const endNode = grid[FINISH_ROW][FINISH_COL];
    const visitedNodesInOrder = performBFS(
      grid,
      startNode,
      endNode,
      gridHeight,
      gridWidth
    );
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    animateBFS(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  const aStarAlgorithm = () => {
    const startNode = grid[START_ROW][START_COL];
    const endNode = grid[FINISH_ROW][FINISH_COL];
    const path = performAStar(grid, startNode, endNode, gridHeight, gridWidth);
    animateDijkstras(path[0], path[1]);
  };

  // Should clear all node colors, walls, etc
  const clearGrid = () => {
    const grid = [];

    for (let row = 0; row < gridHeight; row++) {
      const rows = [];
      for (let col = 0; col < gridWidth; col++) {
        rows.push(createNode(col, row));

        if (row === START_ROW && col === START_COL)
          document.getElementById(`node-${row}-${col}`).className =
            "node start-node";
        else if (row === FINISH_ROW && col === FINISH_COL) {
          document.getElementById(`node-${row}-${col}`).className =
            "node end-node";
        } else {
          // Set grid to just node
          document.getElementById(`node-${row}-${col}`).className = "node";
        }
      }
      grid.push(rows);
    }
    setGrid(grid);
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
      <Navbar
        callDijkstras={dijkstrasAlgorithm}
        callDFS={dfsAlgorithm}
        callBFS={bfsAlgorithm}
        callAStar={aStarAlgorithm}
        clearGrid={clearGrid}
      />
      <Legend />
      <div className="grid">
        <div className="textContainer">
          <Typography variant="h5">
            Select your Path Finding Algorithm and Visualise it!
          </Typography>
        </div>
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
    f: 0,
    g: 0,
    h: 0,
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

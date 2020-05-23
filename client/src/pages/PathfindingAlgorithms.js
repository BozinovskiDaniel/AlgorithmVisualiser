import React, { useState, useEffect, Fragment } from "react";
import Node from "../components/Node";
import Legend from "../components/Legend";
import Navbar from "../components/layout/Navbar";
import Typography from "@material-ui/core/Typography";

// Helper
import {
  animateDijkstras,
  animateBFS,
  animateDFS,
} from "../components/Animate";

// Algorithms
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../components/pathFindingAlgorithms/dijkstras";

import { performDFS } from "../components/pathFindingAlgorithms/depthFirstSearch";
import { performBFS } from "../components/pathFindingAlgorithms/breadthFirstSearch";
import { performAStar } from "../components/pathFindingAlgorithms/aStar";
import { performGreedyBFS } from "../components/pathFindingAlgorithms/greedyBestFirstSearch";

function PathfindingAlgorithms() {
  const [grid, setGrid] = useState(null);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [pressedStartNode, setPressedStartNode] = useState(false);
  const [pressedEndNode, setPressedEndNode] = useState(false);
  const [gridHeight, setGridHeight] = useState(null);
  const [gridWidth, setGridWidth] = useState(null);

  // Start and end nodes
  const [startRow, setStartRow] = useState(10);
  const [startCol, setStartCol] = useState(15);
  const [endRow, setEndRow] = useState(10);
  const [endCol, setEndCol] = useState(29);

  useEffect(() => {
    const grid = [];
    const width = window.innerWidth;
    const height = window.innerHeight;
    const gridHeight = height / 46;
    const gridWidth = width / 32;
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
    if (row === startRow && col === startCol) {
      setPressedStartNode(true);
      return;
    } else if (row === endRow && col === endCol) {
      setPressedEndNode(true);
      return;
    }

    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    // Set start node
    if (pressedStartNode) {
      const newGrid = getGridWithStartMoved(grid, row, col);
      setGrid(newGrid);
      return;
    }

    // Set end node
    else if (pressedEndNode) {
      const newGrid = getGridWithEndMoved(grid, row, col);
      setGrid(newGrid);
      return;
    } else if (!mouseIsPressed) return;
    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    // Set all to false
    setPressedStartNode(false);
    setPressedEndNode(false);
    setMouseIsPressed(false);
  };

  const getGridWithStartMoved = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];

    if (!node.isWall) {
      newGrid[startRow][startCol].isStart = false;
      setStartRow(row);
      setStartCol(col);

      const newNode = {
        ...node,
        isStart: !node.isStart,
      };
      newGrid[row][col] = newNode;
      return newGrid;
    }
  };

  const getGridWithEndMoved = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];

    if (!node.isWall) {
      newGrid[endRow][endCol].isEnd = false;
      setEndRow(row);
      setEndCol(col);

      const newNode = {
        ...node,
        isEnd: !node.isEnd,
      };
      newGrid[row][col] = newNode;
      return newGrid;
    }
  };

  // Algorithm Calls
  const dijkstrasAlgorithm = () => {
    const startNode = grid[startRow][startCol];
    const endNode = grid[endRow][endCol];
    const visitedNodesInorder = dijkstra(grid, startNode, endNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    animateDijkstras(grid, visitedNodesInorder, nodesInShortestPathOrder);
  };

  const dfsAlgorithm = () => {
    const startNode = grid[startRow][startCol];
    const endNode = grid[endRow][endCol];
    const visitedNodesInOrder = performDFS(
      grid,
      startNode,
      endNode,
      gridHeight,
      gridWidth
    );
    animateDFS(grid, visitedNodesInOrder, startNode, endNode);
  };

  const bfsAlgorithm = () => {
    const startNode = grid[startRow][startCol];
    const endNode = grid[endRow][endCol];
    const visitedNodesInOrder = performBFS(
      grid,
      startNode,
      endNode,
      gridHeight,
      gridWidth
    );
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    animateBFS(grid, visitedNodesInOrder, nodesInShortestPathOrder);
  };

  const aStarAlgorithm = () => {
    const startNode = grid[startRow][startCol];
    const endNode = grid[endRow][endCol];
    const path = performAStar(grid, startNode, endNode, gridHeight, gridWidth);
    animateDijkstras(grid, path[0], path[1]);
  };

  const greedyBfsAlgorithm = () => {
    const startNode = grid[startRow][startCol];
    const endNode = grid[endRow][endCol];
    const path = performGreedyBFS(
      grid,
      startNode,
      endNode,
      gridHeight,
      gridWidth
    );
    animateDijkstras(grid, path[0], path[1]);
  };

  // Should clear all node colors, walls, etc
  const clearGrid = () => {
    const grid = [];

    for (let row = 0; row < gridHeight; row++) {
      const rows = [];
      for (let col = 0; col < gridWidth; col++) {
        rows.push(createNode(col, row));

        if (row === startRow && col === startCol)
          document.getElementById(`node-${row}-${col}`).className =
            "node start-node";
        else if (row === endRow && col === endCol) {
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

  const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === startRow && col === startCol,
      isEnd: row === endRow && col === endCol,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
      f: null,
      g: null,
      h: null,
    };
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
        callGreedyBFS={greedyBfsAlgorithm}
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

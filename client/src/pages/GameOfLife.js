import React, { useState, useEffect, useCallback, useRef } from "react";
import GameOfLifeNavbar from "../components/layout/GameOfLifeNavbar";
import produce from "immer";

const totalRows = 28;
const totalCols = 60;
const operations = [
  [1, 0],
  [1, -1],
  [1, 1],
  [0, 1],
  [0, -1],
  [-1, 0],
  [-1, 1],
  [-1, -1],
];

function GameOfLife(props) {
  const [grid, setGrid] = useState(null);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  useEffect(() => {
    const newGrid = [];
    for (let row = 0; row < totalRows; row++) {
      const rows = [];

      for (let col = 0; col < totalCols; col++) {
        rows.push(0);
      }
      newGrid.push(rows);
    }
    setGrid(newGrid);
  }, []);

  const getTotalNeighbours = (grid, row, col) => {
    let n = 0;
    operations.map(([x, y]) => {
      const newR = row + x;
      const newC = col + y;
      if (newR >= 0 && newC >= 0 && newR < totalRows && newC < totalCols) {
        if (grid[newR][newC]) n++;
      }
    });

    return n;
  };

  let gridMarkup = grid
    ? grid.map((row, i) => {
        return row.map((col, k) => {
          return (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  // Change the grid here
                  gridCopy[i][k] = !grid[i][k];
                });

                setGrid(newGrid);
              }}
              style={{
                width: "25px",
                height: "25px",
                border: "1px solid #bbb",
                backgroundColor: grid[i][k]
                  ? "rgba(30, 139, 195, 0.9)"
                  : undefined,
              }}
            ></div>
          );
        });
      })
    : null;

  const runSimulation = useCallback(() => {
    if (runningRef.current) {
      // Set rules here
      // Loop over grid and apply rules
      setGrid((g) => {
        return produce(g, (GridCopy) => {
          let neighbours = 0;

          for (let i = 0; i < totalRows; i++) {
            for (let j = 0; j < totalCols; j++) {
              neighbours = getTotalNeighbours(g, i, j);

              if (neighbours < 2 || neighbours > 3) GridCopy[i][j] = 0;
              else if (neighbours === 3 && g[i][j] === 0) GridCopy[i][j] = 1;
            }
          }
        });
      });

      // Set timeout
      setTimeout(runSimulation, 10);
    }
  }, []);

  const clearGrid = () => {
    const newGrid = [];
    for (let row = 0; row < totalRows; row++) {
      const rows = [];

      for (let col = 0; col < totalCols; col++) {
        rows.push(0);
      }
      newGrid.push(rows);
    }
    setGrid(newGrid);
  };

  return (
    <>
      <GameOfLifeNavbar
        running={running}
        setRunning={setRunning}
        runSimulation={runSimulation}
        runningRef={runningRef}
        clearGrid={clearGrid}
      />
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${totalCols}, 25px)`,
          margin: "90px",
        }}
      >
        {grid ? gridMarkup : null}
      </div>
    </>
  );
}

export default GameOfLife;

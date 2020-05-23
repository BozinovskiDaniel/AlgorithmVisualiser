// Animate Dijkstras
export const animateDijkstras = (
  grid,
  visitedNodesInorder,
  nodesInShortestPathOrder
) => {
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

// Animate the Depth First Search Algorithm
export const animateDFS = (grid, visitedNodesInOrder, startNode, endNode) => {
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

export const animateBFS = (
  grid,
  visitedNodesInOrder,
  nodesInShortestPathOrder
) => {
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

const getNodesInOrder = (startNode, endNode) => {
  const nodesInShortestPathOrder = [];

  let currentNode = endNode;
  while (currentNode !== startNode) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
};

// Shortest Path
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

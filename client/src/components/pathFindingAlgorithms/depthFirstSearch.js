export const performDFS = (grid, startNode, endNode) => {
  const visited = [];
  dfsUtility(visited, startNode, endNode, grid);
  console.log("hey");
  return visited;
};

const dfsUtility = (visited, node, endNode, grid) => {
  // Set to visited
  console.log(node);
  node.isVisited = true;
  visited.push(node);
  if (node === endNode) return;

  // Loop over adjacent nodes, if unvisited, call dfs on it
  const adjNodes = adjacentNodes(grid, node);

  for (const adjNode of adjNodes) {
    if (adjNode.isVisited === false && adjNode.isWall === false) {
      dfsUtility(visited, adjNode, endNode, grid);
    }
  }
};

const adjacentNodes = (grid, node) => {
  const adjNodes = [];

  // Assignments
  const nodeRow = node.row;
  const nodeCol = node.col;

  const colBefore = nodeCol - 1;
  const colAfter = nodeCol + 1;
  const rowBefore = nodeRow - 1;
  const rowAfter = nodeRow + 1;

  // Conditions
  if (rowBefore >= 0 && rowBefore < 19)
    adjNodes.push(grid[nodeRow - 1][nodeCol]);
  if (colAfter >= 0 && colAfter < 46) adjNodes.push(grid[nodeRow][nodeCol + 1]);
  if (rowAfter >= 0 && rowAfter < 19) adjNodes.push(grid[nodeRow + 1][nodeCol]);
  if (colBefore >= 0 && colBefore < 46)
    adjNodes.push(grid[nodeRow][nodeCol - 1]);

  return adjNodes;
};

const calculateAmountOfNodes = (grid) => {
  var count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      count++;
    }
  }
  return count;
};

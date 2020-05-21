export const performDFS = (grid, startNode, endNode, gridHeight, gridWidth) => {
  const visited = [];
  dfsUtility(visited, startNode, endNode, grid, gridHeight, gridWidth);
  return visited;
};

const dfsUtility = (visited, node, endNode, grid, gridHeight, gridWidth) => {
  // Set to visited

  node.isVisited = true;
  visited.push(node);
  if (node === endNode) return;

  // Loop over adjacent nodes, if unvisited, call dfs on it
  const adjNodes = adjacentNodes(grid, node, gridHeight, gridWidth);
  console.log(adjNodes);
  for (const adjNode of adjNodes) {
    if (adjNode.isVisited === false && adjNode.isWall === false) {
      adjNode.previousNode = node;
      dfsUtility(visited, adjNode, endNode, grid, gridHeight, gridWidth);
    }
  }
};

const adjacentNodes = (grid, node, gridHeight, gridWidth) => {
  const adjNodes = [];

  // Assignments
  const nodeRow = node.row;
  const nodeCol = node.col;

  const colBefore = nodeCol - 1;
  const colAfter = nodeCol + 1;
  const rowBefore = nodeRow - 1;
  const rowAfter = nodeRow + 1;

  // Conditions
  if (rowBefore >= 0 && rowBefore < gridHeight)
    adjNodes.push(grid[nodeRow - 1][nodeCol]);
  if (colAfter >= 0 && colAfter < gridWidth)
    adjNodes.push(grid[nodeRow][nodeCol + 1]);
  if (rowAfter >= 0 && rowAfter < gridHeight)
    adjNodes.push(grid[nodeRow + 1][nodeCol]);
  if (colBefore >= 0 && colBefore < gridWidth)
    adjNodes.push(grid[nodeRow][nodeCol - 1]);

  return adjNodes;
};

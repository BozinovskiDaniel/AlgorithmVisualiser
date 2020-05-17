export const dijkstra = (grid, startNode, finishNode) => {
  // Checks if we're initially given the same start/finish node, or whether one is undefined
  if (!startNode || !finishNode || startNode === finishNode) return false;

  const visitedNodesInorder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  // While there are still unvisited nodes
  while (!!unvisitedNodes.length) {
    // Sort the nodes by the shortest distances
    sortNodesByDistance(unvisitedNodes);

    // Get the closest node
    const closestNode = unvisitedNodes.shift();

    // Handle walls here
    if (closestNode.isWall) continue;

    // If there is no path, return the visited nodes arr
    if (closestNode.distance === Infinity) return visitedNodesInorder;
    // Animate here

    // Mark it as visited
    closestNode.visited = true;
    visitedNodesInorder.push(closestNode);
    // If found, return success, else update it's neighbours
    if (closestNode == finishNode) return visitedNodesInorder;
    updateUnvisitedNeighbours(closestNode, grid);
  }
};

const sortNodesByDistance = (unvisitedNodes) => {
  unvisitedNodes.sort((a, b) => a.distance - b.distance);
};

const updateUnvisitedNeighbours = (node, grid) => {
  // Get an array of the neighbours
  const unvisitedNeighbours = getUnvisitedNeighbours(node, grid);

  for (const neighbour of unvisitedNeighbours) {
    neighbour.distance = node.distance + 1;
    neighbour.previousNode = node;
  }
};

const getUnvisitedNeighbours = (node, grid) => {
  const neighbours = [];
  const { row, col } = node;
  if (row > 0) neighbours.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbours.push(grid[row + 1][col]);
  if (col > 0) neighbours.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbours.push(grid[row][col + 1]);
  return neighbours.filter((neighbour) => !neighbour.isVisited);
};

const getAllNodes = (grid) => {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

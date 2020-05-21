export const performBFS = (grid, startNode, endNode, gridHeight, gridWidth) => {
  var visitedNodesInOrder = [];
  let queue = []; // Initialise queue

  // Add the source node
  queue.push(startNode);
  startNode.isVisited = true;
  visitedNodesInOrder.push(startNode);

  while (queue.length > 0) {
    let s = queue.shift(); // Remove the first element of the queue
    if (s === endNode) break; // If we found the endnode, break the loop

    let adjNodes = adjacentNodes(grid, s, gridHeight, gridWidth); // Return an array of the adjacent nodes

    // Loop over the adjacent nodes
    // If they are not visited and aren't walls, visit them
    for (let adjNode of adjNodes) {
      if (adjNode.isVisited === false && adjNode.isWall === false) {
        adjNode.previousNode = s;
        queue.push(adjNode);
        visitedNodesInOrder.push(adjNode);
        adjNode.isVisited = true;
      }
    }
  }

  return visitedNodesInOrder;
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

export const performAStar = (grid, startNode, endNode) => {
  let openList = [];
  let closedList = [];
  let nodesVisited = [];
  openList.push(startNode);

  // While the openlist is not empty
  while (openList.length > 0) {
    // let currnode equal the node in the openlist with the smallest f val
    let currNode = openList[0];
    for (let node of openList) {
      if (node.f < currNode.f) currNode = node;
    }
    nodesVisited.push(currNode);
    // Remove currNode from openList
    let newList = openList.filter((node) => node !== currNode);
    openList = newList;

    // Add currNode to closedList
    closedList.push(currNode);

    // If the node is found, return the reversed path and the ndoes visited
    if (endNode === currNode) {
      let path = [];
      let curr = currNode;
      while (curr != null) {
        path.push(curr);
        curr = curr.previousNode;
      }
      return [nodesVisited, path.reverse()];
    }

    let children = adjacentNodes(grid, currNode); // Get adjacent nodes

    // Loop over the adjacent nodes
    for (let child of children) {
      if (child.isWall) continue;
      nodesVisited.push(child);

      if (closedList.includes(child)) continue; // If child is in the closed list

      // Calculate the heuristic distances (Manhattan as diagonals aren't allowed in our grid)
      child.g = currNode.g + distanceBetweenNodes(child, currNode);
      child.h = distanceBetweenNodes(child, endNode);
      child.f = child.g + child.h;

      // If child is already in open list, skip this iteration
      for (let openListChild of openList) {
        if (openListChild === child && child.g > openListChild.g) continue;
      }

      // Keep a pointer to the prev node and append the child to the openlist
      child.previousNode = currNode;
      openList.push(child);
    }
  }
};

// Calculates the Manhattan distance between two nodes in a Grid
const distanceBetweenNodes = (node, currentNode) => {
  return (
    Math.abs(node.row - currentNode.row) + Math.abs(node.col - currentNode.col)
  );
};

// Finds the adjacent nodes of a given node in a Grid
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

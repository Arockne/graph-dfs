// function isPath(graph, vertexA, vertexB) {
//   for (const point of graph[vertexA]) {
//     if (point === vertexB) {
//       return true;
//     }
//     if (isPath(graph, point, vertexB)) {
//       return true;
//     }
//   }
//   return false;
// }
function isPath(graph, vertexA, vertexB, visited = new Set()) {
  visited.add(vertexA);

  for (const vertex of graph[vertexA]) {
    if (vertex === vertexB) {
      return true;
    }

    if (!visited.has(vertex)) {
      if (isPath(graph, vertex, vertexB, visited)) {
        return true;
      }
    }
  }

  return false;
}

if (require.main === module) {
  // add your own tests in here
  let graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: true");
  console.log(isPath(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "dave"));
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution

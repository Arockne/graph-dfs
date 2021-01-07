function isPath(graph, vertexA, vertexB, visited = new Set()) {
  if (graph[vertexA].includes(vertexB)) {
    return true;
  }

  visited.add(vertexA);

  for (const vertex of graph[vertexA]) {
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

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "dave", "jambaby"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "jan"));

  graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby", "dave"],
    dave: ["jan"],
    mittens: []
  };

  console.log("");

  console.log("Expecting: true");
  console.log(isPath(graph, "jan", "jan"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "mittens"));

  graph = {
    jan: ["john", "jambaby", "malala"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby", "dave", "martin"],
    dave: ["jan"],
    mittens: [],
    martin: ["mittens"],
    malala: ["dave", "carl", "martin", "pirate"],
    pirate: ["shiba", "inu"],
    shiba: [],
    inu: []
  };

  console.log("");

  console.log("Expecting: true");
  console.log(isPath(graph, "carl", "inu"));
}

module.exports = isPath;

// Please add your pseudocode to this file
/****************************************************************************************** 
 * function is_path(graph, vertex_a, vertex_b, visited):
 *  return true if vertex_b exists in vertex_a adjacency list
 * 
 *  add vertex_a to visited
 * 
 *  iterate over each vertex in vertex_a adjacency list:
 *    if vertex is not in visited:
 *      initialize variable result to value returned from is_path(graph, vertex, vertex_b, visited)
 *      return true if result is true
 * 
 *  return false
 * *****************************************************************************************/

// And a written explanation of your solution
/****************************************************************************************** 
 * I started by thinking of my base case, which is that the algorithm should return true if 
 * vertex B is in vertex A's adjacency list. I'm not checking for inclusion in the other direction
 * from B to A because this is a directed graph. Since it is possible for there to be loops in 
 * the graph, I need to also store a list of vertices that have been visited. This prevents me 
 * from creating a stack overflow. 
 * 
 * I chose a Set instead of an Array because checking if a vertex
 * has been visited already would then have an O(1) lookup time, whereas an Array would be O(n). 
 * The trade-off is that the Set takes up more space in memory. 
 * 
 * I chose to iterate over the adjacency list using a loop that can be broken out of, as opposed
 * to one that offers no breaking mechanism. I did this because I want iteration to stop as soon
 * as a path has been found. At that time I can simply return true.
 * 
 * On each iteration, I check if the vertex in the adjacency list has not been visited. If it hasn't
 * I recurse with the current vertex that's being iterated over, vertex B, and the  
 * visited Set. If the recursive call returns true, that value will travel up the stack and
 * continue returning true until it reaches the top and the whole method returns true.
 * 
 * If all reachable vertices are visited and vertex B is not found, the algorithm will return
 * false once it exits the iteration in each frame.
 * *****************************************************************************************/

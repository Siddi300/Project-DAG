// server.js
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// POST /pipelines/parse
app.post("/pipelines/parse", (req, res) => {
  const payload = req.body || {};
  const nodes = payload.nodes || [];
  const edges = payload.edges || [];

  const numNodes = nodes.length;
  const numEdges = edges.length;

  // Build adjacency list
  const adj = {};
  nodes.forEach(node => {
    adj[node.id] = [];
  });

  edges.forEach(edge => {
    const { source, target } = edge;
    if (adj[source]) {
      adj[source].push(target);
    }
  });

  // Cycle detection using DFS
  const visited = new Set();
  const recStack = new Set();

  function hasCycle(v) {
    visited.add(v);
    recStack.add(v);

    for (const neighbor of adj[v] || []) {
      if (!visited.has(neighbor)) {
        if (hasCycle(neighbor)) return true;
      } else if (recStack.has(neighbor)) {
        return true;
      }
    }

    recStack.delete(v);
    return false;
  }

  let isDag = true;
  for (const nodeId of Object.keys(adj)) {
    if (!visited.has(nodeId)) {
      if (hasCycle(nodeId)) {
        isDag = false;
        break;
      }
    }
  }

  res.json({
    num_nodes: numNodes,
    num_edges: numEdges,
    is_dag: isDag
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

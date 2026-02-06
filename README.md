🧠 Project Overview

This project is a simple implementation of a Directed Acyclic Graph (DAG) builder and validator.

It allows users to:

Create nodes

Drag & drop nodes on canvas

Connect nodes with edges

Automatically validate whether the graph is a DAG or not

If the graph contains a cycle, the system detects it and indicates that it is NOT a DAG.

🚀 Features

🧩 Create multiple nodes dynamically

🖱️ Drag & drop nodes anywhere on the canvas

🔗 Connect nodes visually

🔍 Cycle detection algorithm

✅ DAG / NOT DAG validation

🎨 Interactive UI for graph building

🛠️ Tech Stack

(Modify based on what you used)

Frontend: React / Vite / HTML / CSS / JS

Graph Library: React Flow / D3 / Custom SVG (choose yours)

Language: JavaScript / TypeScript

Deployment: Netlify

📸 Project Screenshot
<img width="1470" height="881" alt="DAG Project Screenshot" src="https://github.com/user-attachments/assets/b3d0d833-8e27-41ea-8d6f-74d75a3312dc" />
🧮 How DAG Validation Works

The system checks whether the graph contains a cycle.

Algorithm Used

Typically implemented using one of the following:

DFS (Depth First Search) with recursion stack

Topological Sort (Kahn’s Algorithm)

If traversal detects a back edge → cycle exists → Not a DAG.

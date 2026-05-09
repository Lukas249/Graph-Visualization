<div align="center">
  <img alt="Graph visualization banner" src="public/og.svg" />
	<h1>Graph Visualization</h1>
	<img alt="Node.js" src="https://img.shields.io/badge/Node.js_v22.14.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
	<img alt="Next.js" src="https://img.shields.io/badge/Next.js_v15.5.18-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
	<img alt="React" src="https://img.shields.io/badge/React_v19.2.6-149eca?style=for-the-badge&logo=react&logoColor=white" />
	<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript_v5.9.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
	<img alt="D3" src="https://img.shields.io/badge/D3_v7.9.0-f9a03c?style=for-the-badge&logo=d3dotjs&logoColor=white" />
	<img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS_v4.3.0-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" />

  <p>Web-based graph visualization and editing tool. Build nodes and edges in seconds, then explore structure with smooth zoom and pan.</p>
</div>

## Features

- Interactive graph visualization
- Graph editor for nodes and edges
- Zoom and pan navigation

## Usage

- Add a few nodes and connect them with edges
- Drag nodes to explore structure and spacing
- Zoom and pan to inspect dense areas

## Edge support

- Directed and undirected graphs
- Self-loops are allowed
- Between two nodes, you can have only one undirected edge (A -- B)
- Between two nodes, you can have up to two directed edges (A -> B and B -> A)
- Parallel edges in the same direction are not allowed
- You cannot mix a directed edge and an undirected edge between the same two nodes

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Docker (optional)

```bash
npm run docker-dev
```

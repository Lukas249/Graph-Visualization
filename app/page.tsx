"use client";

import { useMemo, useRef, useState } from "react";
import { GraphHandle } from "./visualize/core/graphTypes";
import { Tab, TabsRef, TabTitle } from "./components/tabs/types";
import { createRenderTab, createStaticTab } from "./components/tabs/tabFactory";
import GuideContent from "./visualize/guideContent";
import GraphEditor from "./visualize/core/graphEditor";
import GraphVisualization from "./visualize/graphVisualization";
import { Allotment } from "allotment";
import { Tabs } from "./components/tabs/tabs";

import "allotment/dist/style.css";

function DescriptionContent() {
  return (
    <section className="max-w-layout mx-auto px-8">
      <p className="mt-4 text-base leading-7 text-gray-200">
        Graph visualization helps you understand connected data by turning
        nodes and edges into a clear, interactive map. With Graphly, you can
        build a graph in seconds, rearrange relationships, and explore
        structure through smooth zoom and pan. This makes it easier to spot
        clusters, pathways, and patterns that are hidden in raw lists or
        tables.
      </p>
      <p className="mt-4 text-base leading-7 text-gray-200">
        The online graph editor lets you create directed and undirected edges,
        add weights, and update node relationships in real time. Whether you
        are learning graph theory, prototyping an algorithm, or preparing a
        visual explanation for a report, the editor keeps the focus on the
        structure of your graph. You can adjust nodes, refine edges, and see
        how the layout responds instantly.
      </p>
      <p className="mt-4 text-base leading-7 text-gray-200">
        Start by adding a few nodes and edges. The interactive
        view is built for experimentation, so you can move between editing
        and exploration without leaving the page. If you are looking for a
        fast way to create graph visualizations online, Graphly gives you a
        clean workspace.
      </p>
    </section>
  )
}

const graphNodes = [{"id": "1"}, {"id": "2"}, {"id": "3"}, {"id": "4"}, {"id": "5"}, {"id": "6"}]
const graphEdges = [{"source": {"id": "2"}, "target": {"id": "1"}}, {"source": {"id": "1"}, "target": {"id": "3"}}, {"source": {"id": "2"}, "target": {"id": "4"}}, {"source": {"id": "3"}, "target": {"id": "5"}}, {"source": {"id": "5"}, "target": {"id": "6"}}, {"source": {"id": "2"}, "target": {"id": "5"}}]

export default function VisualizePage() {
  const graphAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Graphly",
    url: "https://graphly.app",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    description:
      "Graph visualization tool to create and edit nodes and edges. Explore relationships with zoom and pan directly in your browser.",
    featureList: [
      "Interactive graph visualization",
      "Graph editor for nodes and edges",
      "Zoom and pan navigation",
      "Real-time updates",
    ],
    browserRequirements: "Requires JavaScript",
  };

  const [nodes, setNodes] = useState(graphNodes);
  const [edges, setEdges] = useState(graphEdges);

  const graphRef = useRef<GraphHandle>(null);

  const tutorialTabsRef = useRef<TabsRef>(null);

  const [tutorialTabs] = useState<Tab[]>([
    createStaticTab(
      TabTitle.Description,
      <DescriptionContent/>,
    ),
    createStaticTab(
      TabTitle.Guide,
      <GuideContent/>,
    ),
    createRenderTab(TabTitle.Graph, () => (
      <GraphEditor
        userNodes={nodes}
        userEdges={edges}
        onChange={(nodes, edges) => {
          setNodes(nodes);
          setEdges(edges);
        }}
      />
    )),
  ]);

  const graphVisualization = useMemo(
    () => (
      <GraphVisualization
        graphNodes={nodes}
        graphEdges={edges}
        isNodeSelectionEnabled={false}
        ref={graphRef}
        className="h-full w-full grow"
      />
    ),
    [nodes, edges],
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphAppJsonLd) }}
      />

      <div className="h-screen">
        <div className="max-w-layout relative left-1/2 flex h-full -translate-x-1/2 flex-row items-center p-8 pt-6">
          <Allotment className="h-full w-full" vertical={false}>
            <Allotment.Pane preferredSize="60%">
              {graphVisualization}
            </Allotment.Pane>

            <Allotment.Pane
              preferredSize="40%"
              className="bg-gray-dark absolute left-[60%]"
            >
              <Tabs
                ref={tutorialTabsRef}
                className="flex h-full flex-col"
                initialTabs={tutorialTabs}
              />
            </Allotment.Pane>
          </Allotment>
        </div>
      </div>
    </div>
  );
}

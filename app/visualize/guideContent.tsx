import { ArticleParagraph } from "@/app/components/articleParagraph";

export type GuideContentProps = {
  guideText?: string;
  isNodeSelectionEnabled?: boolean;
};

export default function GuideContent() {
  return (
    <div className="mx-7">
      <ArticleParagraph>
        <p>
          <strong>Graph Modification Guide</strong>
        </p>
        You can freely modify the graph in the Graph tab using the following
        syntax:
        <ul className="list-disc pl-4">
          <li>
            Undirected Edge: To create an undirected edge between vertices, use
            {"  "}
            {<pre className="inline-block">--</pre>}
          </li>
          <li>
            Directed Edge: To create a directed edge between vertices, use
            {"  "}
            {<pre className="inline-block">{"->"}</pre>}
          </li>
          <li>
            Edge Weights: To add a weight to an edge, specify it after a colon
            {"  "}
            {<pre className="inline-block">:</pre>}
          </li>
        </ul>
      </ArticleParagraph>

      <ArticleParagraph>
        <p>
          <strong>Interactive View</strong>
        </p>
        Zoom and move using your mouse or touch. Zoom in to see nodes in detail
        or zoom out to see the whole graph.
      </ArticleParagraph>
    </div>
  );
}

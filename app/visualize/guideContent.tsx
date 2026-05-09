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
          <strong>Edge Support</strong>
        </p>
        <ul className="list-disc pl-4">
          <li>Directed and undirected graphs are supported.</li>
          <li>Self-loops are allowed.</li>
          <li>Between two nodes, you can have only one undirected edge.</li>
          <li>
            Between two nodes, you can have up to two directed edges (A -&gt; B
            and B -&gt; A).
          </li>
          <li>Parallel edges in the same direction are not allowed.</li>
          <li>
            You cannot mix a directed edge and an undirected edge between the
            same two nodes.
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

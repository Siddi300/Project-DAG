// llmNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: "system",
      style: { top: "33%" },
    },
    {
      type: "target",
      position: Position.Left,
      id: "prompt",
      style: { top: "66%" },
    },
    { type: "source", position: Position.Right, id: "response" },
  ];

  return (
    <BaseNode id={id} label="LLM" handles={handles}>
      <div style={{ fontSize: "13px", color: "#475569", lineHeight: "1.5" }}>
        This is a LLM
      </div>
    </BaseNode>
  );
};

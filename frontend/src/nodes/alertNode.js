// alertNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const AlertNode = ({ id }) => (
  <BaseNode
    id={id}
    label="Alert"
    handles={[{ type: "target", position: Position.Left, id: "msg" }]}
  >
    <div
      style={{
        fontSize: "13px",
        color: "#64748b",
        backgroundColor: "#fef2f2",
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #fee2e2",
      }}
    >
      ⚠️ This node triggers a browser popup alert.
    </div>
  </BaseNode>
);

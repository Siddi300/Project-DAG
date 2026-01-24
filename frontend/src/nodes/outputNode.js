// outputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import {
  nodeInputStyle,
  labelStyle,
  onFieldFocus,
  onFieldBlur,
} from "../styles";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <BaseNode
      id={id}
      label="Output"
      handles={[{ type: "target", position: Position.Left, id: "value" }]}
    >
      <label style={labelStyle}>Name</label>
      <input
        style={nodeInputStyle}
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        onFocus={onFieldFocus}
        onBlur={onFieldBlur}
      />
      <label style={{ ...labelStyle, marginTop: "12px" }}>Type</label>
      <select
        style={nodeInputStyle}
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
        onFocus={onFieldFocus}
        onBlur={onFieldBlur}
      >
        <option value="Text">Text</option>
        <option value="File">Image</option>
      </select>
    </BaseNode>
  );
};

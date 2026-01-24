// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import {
  nodeInputStyle,
  labelStyle,
  onFieldFocus,
  onFieldBlur,
} from "../styles";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <BaseNode
      id={id}
      label="Input"
      handles={[{ type: "source", position: Position.Right, id: "value" }]}
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
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
        onFocus={onFieldFocus}
        onBlur={onFieldBlur}
      >
        <option value="Text">Text</option>
        <option value="File">File</option>
      </select>
    </BaseNode>
  );
};

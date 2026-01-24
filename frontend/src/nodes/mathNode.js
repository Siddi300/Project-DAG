// mathNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import {
  nodeInputStyle,
  labelStyle,
  onFieldFocus,
  onFieldBlur,
} from "../styles";

export const MathNode = ({ id }) => (
  <BaseNode
    id={id}
    label="Math"
    handles={[
      {
        type: "target",
        position: Position.Left,
        id: "a",
        style: { top: "30%" },
      },
      {
        type: "target",
        position: Position.Left,
        id: "b",
        style: { top: "70%" },
      },
      { type: "source", position: Position.Right, id: "res" },
    ]}
  >
    <label style={labelStyle}>Operation</label>
    <select style={nodeInputStyle} onFocus={onFieldFocus} onBlur={onFieldBlur}>
      <option value="add">Add (+)</option>
      <option value="sub">Subtract (-)</option>
      <option value="mul">Multiply (x)</option>
    </select>
  </BaseNode>
);

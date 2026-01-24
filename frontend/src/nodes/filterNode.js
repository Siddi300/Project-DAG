// filterNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import {
  nodeInputStyle,
  labelStyle,
  onFieldFocus,
  onFieldBlur,
} from "../styles";

export const FilterNode = ({ id }) => (
  <BaseNode
    id={id}
    label="Filter"
    handles={[
      { type: "target", position: Position.Left, id: "in" },
      { type: "source", position: Position.Right, id: "out" },
    ]}
  >
    <label style={labelStyle}>Condition</label>
    <input
      type="text"
      placeholder="e.g. > 10"
      style={nodeInputStyle}
      onFocus={onFieldFocus}
      onBlur={onFieldBlur}
    />
  </BaseNode>
);

// timerNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import {
  nodeInputStyle,
  labelStyle,
  onFieldFocus,
  onFieldBlur,
} from "../styles";

export const TimerNode = ({ id }) => (
  <BaseNode
    id={id}
    label="Timer"
    handles={[{ type: "source", position: Position.Right, id: "out" }]}
  >
    <label style={labelStyle}>Duration (Seconds)</label>
    <input
      type="number"
      defaultValue={5}
      style={nodeInputStyle}
      onFocus={onFieldFocus}
      onBlur={onFieldBlur}
    />
  </BaseNode>
);

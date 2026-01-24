// noteNode.js

import { BaseNode } from "./BaseNode";
import {
  nodeInputStyle,
  labelStyle,
  onFieldFocus,
  onFieldBlur,
} from "../styles";

export const NoteNode = ({ id }) => (
  <BaseNode id={id} label="Note" handles={[]}>
    <label style={labelStyle}>Your Note</label>
    <textarea
      placeholder="Add a note..."
      style={{ ...nodeInputStyle, minHeight: "80px", resize: "vertical" }}
      onFocus={onFieldFocus}
      onBlur={onFieldBlur}
    />
  </BaseNode>
);

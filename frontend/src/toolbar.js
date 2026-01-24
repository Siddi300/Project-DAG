// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  FiLogIn,
  FiCpu,
  FiLogOut,
  FiType,
  FiEdit3,
  FiPlus,
  FiClock,
  FiFilter,
  FiAlertTriangle,
} from "react-icons/fi";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        <DraggableNode type="customInput" label="Input" icon={<FiLogIn />} />
        <DraggableNode type="llm" label="LLM" icon={<FiCpu />} />
        <DraggableNode type="customOutput" label="Output" icon={<FiLogOut />} />
        <DraggableNode type="text" label="Text" icon={<FiType />} />
        <DraggableNode type="note" label="Note" icon={<FiEdit3 />} />
        <DraggableNode type="math" label="Math" icon={<FiPlus />} />
        <DraggableNode type="timer" label="Timer" icon={<FiClock />} />
        <DraggableNode type="filter" label="Filter" icon={<FiFilter />} />
        <DraggableNode type="alert" label="Alert" icon={<FiAlertTriangle />} />
      </div>
    </div>
  );
};

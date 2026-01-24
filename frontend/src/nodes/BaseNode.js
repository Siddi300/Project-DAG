// BaseNode.js

import { Handle } from "reactflow";
import { FiX } from "react-icons/fi";
import { useStore } from "../store";

export const BaseNode = ({ id, label, children, handles = [] }) => {
  const deleteNode = useStore((s) => s.deleteNode);

  const removeNode = () => {
    deleteNode(id);
  };

  return (
    <div
      style={{
        minWidth: "200px",
        padding: "0",
        border: "1.5px solid #e2e8f0",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        overflow: "visible",
        transition: "border-color 0.2s ease",
        position: "relative",
      }}
    >
      <div
        style={{
          padding: "8px 12px",
          background: "#f8fafc",
          borderBottom: "1.5px solid #e2e8f0",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "#6366f1",
            textTransform: "uppercase",
            letterSpacing: "0.025em",
          }}
        >
          {label}
        </span>

        <button
          onClick={removeNode}
          title="Remove node"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: "2px",
            display: "flex",
            alignItems: "center",
            color: "#94a3b8",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
        >
          <FiX size={14} />
        </button>
      </div>

      <div
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {children}
      </div>

      {handles.map((h, i) => (
        <Handle
          key={i}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={{
            background: "#ffffff",
            width: "10px",
            height: "10px",
            border: "2.5px solid #6366f1",
            boxShadow: "0 0 0 2px #ffffff",
            ...h.style,
          }}
        />
      ))}
    </div>
  );
};

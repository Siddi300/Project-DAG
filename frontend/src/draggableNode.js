// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
      style={{
        cursor: "grab",
        minWidth: "100px",
        height: "55px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
        border: "1px solid #e2e8f0",
        justifyContent: "center",
        flexDirection: "column",
        transition: "all 0.2s ease",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        padding: "6px 15px",
        gap: "4px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#6366f1";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#e2e8f0";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {icon && (
        <span
          style={{
            fontSize: "18px",
            color: "#6366f1",
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </span>
      )}

      <span
        style={{
          color: "#475569",
          fontSize: "13px",
          fontWeight: "500",
        }}
      >
        {label}
      </span>
    </div>
  );
};

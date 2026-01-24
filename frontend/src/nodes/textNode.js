import { useState, useEffect, useRef, useMemo } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);

  const textAreaRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  const updateNodeField = useStore((s) => s.updateNodeField);

  useEffect(() => {
    const matches = [...currText.matchAll(VAR_REGEX)].map((m) => m[1]);
    const unique = [...new Set(matches)];
    setVariables(unique);
    updateNodeField(id, "text", currText);
  }, [currText, id, updateNodeField]);

  useEffect(() => {
    const ta = textAreaRef.current;
    const ov = overlayRef.current;
    const container = containerRef.current;
    if (!ta || !ov || !container) return;

    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
    container.style.height = ta.style.height;

    ov.scrollTop = ta.scrollTop;
  }, [currText]);

  const renderOverlay = () => {
    const parts = currText.split(/(\{\{\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*\}\})/g);

    return parts.map((part, i) => {
      const match = part.match(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/);
      if (match) {
        return (
          <span
            key={i}
            style={{
              background: "rgba(99,102,241,0.2)",
              color: "#4338ca",
              borderRadius: "4px",
              padding: "0 3px",
              fontWeight: 600,
            }}
          >
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const handles = useMemo(() => {
    const targetHandles = variables.map((v, i) => ({
      type: "target",
      position: Position.Left,
      id: `var-${v}`,
      style: {
        top: `${((i + 1) * 100) / (variables.length + 1)}%`,
      },
    }));

    const sourceHandle = {
      type: "source",
      position: Position.Right,
      id: "output",
    };

    return [...targetHandles, sourceHandle];
  }, [variables]);

  const textStyle = {
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: "22px",
    padding: "10px",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    boxSizing: "border-box",
  };

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          minWidth: "240px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          ref={overlayRef}
          style={{
            ...textStyle,
            position: "absolute",
            inset: 0,
            color: "#111827",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {renderOverlay()}
          {currText === "" && (
            <span style={{ color: "#9ca3af" }}>Type ...</span>
          )}
        </div>

        <textarea
          ref={textAreaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          spellCheck={false}
          onScroll={() => {
            if (overlayRef.current && textAreaRef.current) {
              overlayRef.current.scrollTop = textAreaRef.current.scrollTop;
            }
          }}
          style={{
            ...textStyle,
            position: "relative",
            width: "100%",
            resize: "none",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "transparent",
            caretColor: "#111827",
            overflow: "hidden",
          }}
        />
      </div>
    </BaseNode>
  );
};

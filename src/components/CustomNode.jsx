
import { Handle, Position } from "@xyflow/react"

function CustomNode({ data }) {
  const handleStyle = {
    width: "12px",
    height: "12px",
    background: "#A78BFA",
    border: "2px solid white"
  }

  return (
    <div
      style={{
        position: "relative",
        padding: "15px 25px",
        background: "#211A3A",
        border: "1px solid #8B5CF6",
        borderRadius: "10px",
        color: "white",
        minWidth: "120px",
        textAlign: "center"
      }}
    >
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        style={handleStyle}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={handleStyle}
      />

      <Handle
        type="source"
        position={Position.Left}
        id="left"
        style={handleStyle}
      />

      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={handleStyle}
      />

      <span>{data.label}</span>
    </div>
  )
}

export default CustomNode

import React from "react";
import "./CanvasToggle.css";

export default function ToggleCanvasButton({
  toggleShowDrawingCanvas,
  showDrawingCanvas,
}) {
  const buttonText = showDrawingCanvas
    ? "Go to Room"
    : "Go to Drawing Canvas";

  return (
    <button
      onClick={toggleShowDrawingCanvas}
      className="toggle-canvas-button"
    >
      {buttonText}
    </button>
  );
}

import { PaintingBrush } from "../PaintingBrush/PaintingBrush";
import { VanGoghAvatar } from "../Van_gogh_avatar";

export const SketchApp = ({
  mousePosition,
  setShowDrawingCanvas,
}) => {
  return (
    <>
      <PaintingBrush mousePosition={mousePosition} />
      <VanGoghAvatar />
    </>
  );
};

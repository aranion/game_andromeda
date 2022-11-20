import { GameEntityInterface } from '../types';

type IsOutsideCanvasParams = {
  object: GameEntityInterface;
  canvas: HTMLCanvasElement;
};

export const isOutsideCanvas = ({
  object,
  canvas,
}: IsOutsideCanvasParams): boolean => {
  const pos = object.getPosition;
  const axes = Object.keys(pos) as ['x', 'y'];
  const objectEdge = 2 * object.getRadius;
  const canvasSize = {
    x: canvas.width,
    y: canvas.height,
  };
  let isOutside = false;

  for (const axis of axes) {
    isOutside =
      object.getPosition[axis] > canvasSize[axis] + objectEdge ||
      object.getPosition[axis] < -objectEdge;
  }

  return isOutside;
};

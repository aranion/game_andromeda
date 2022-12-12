import { mapCanvasSizeToAxes } from './map-canvas-size-to-axes';
import type { GameEntityInterface } from '../types';

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
  const canvasSize = mapCanvasSizeToAxes(canvas);
  let isOutside = false;

  for (const axis of axes) {
    isOutside =
      object.getPosition[axis] > canvasSize[axis] + objectEdge ||
      object.getPosition[axis] < -objectEdge;
  }

  return isOutside;
};

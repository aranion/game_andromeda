import { Coordinates } from '../types';

export const mapCanvasSizeToAxes = (
  canvas: HTMLCanvasElement
): Coordinates => ({
  x: canvas.width,
  y: canvas.height,
});

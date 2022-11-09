export const mapXSequence = (array: number[]) => {
  return (y: number): [number, number][] => {
    return array.map(x => [x, y]);
  };
};

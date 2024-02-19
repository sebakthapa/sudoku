export const getCellsRange = (location: [number, number]): number[][] => {
  const [boxIndex, cellIndex] = location;
  const rangeArray = [];

  // add all the cells of the box to which selected cell belongs
  for (let i = 0; i < 9; i++) {
    rangeArray.push([boxIndex, i]);
  }

  // add cells occuring in horizontal line
  {
    const startBoxIdx = boxIndex - (boxIndex % 3);
    const startCellIdx = cellIndex - (cellIndex % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rangeArray.push([startBoxIdx + i, startCellIdx + j]);
      }
    }
  }

  // add cells occuring in horizontal line
  {
    const startBoxIdx = boxIndex % 3;
    const startCellIdx = cellIndex % 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rangeArray.push([startBoxIdx + 3 * i, startCellIdx + 3 * j]);
      }
    }
  }

  return rangeArray;
};

export const generatePuzzle = () => {};

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const coords = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let row = 0; row < matrix.length; row++) {
    let resultRow = [];
    for (let col = 0; col < matrix[0].length; col++) {
      let mines = 0;
      coords.forEach(([rowDelta, colDelta]) => {
        const coordRow = row + rowDelta;
        const coordCol = col + colDelta;
        if (
          coordRow >= 0 &&
          coordCol >= 0 &&
          coordRow < matrix.length &&
          coordCol < matrix[0].length &&
          matrix[coordRow][coordCol] === true
        ) {
          mines++;
        }
      });
      resultRow.push(mines);
    }
    result.push(resultRow);
  }
  return result;
}

module.exports = {
  minesweeper,
};

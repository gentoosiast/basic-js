/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let total = 0;
  for (const subArray of matrix) {
    total += subArray.reduce((acc, val) => (val === "^^" ? acc + 1 : acc), 0);
  }
  return total;
}

module.exports = {
  countCats,
};

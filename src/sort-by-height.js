/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // TODO: ask why such sorting function does not work properly
  // return arr.sort((a, b) => {
  //   if (a === -1 || b === -1) {
  //     return 0;
  //   }
  //   return a - b;
  // });
  const withoutMinusOnes = arr.filter((el) => el !== -1);
  withoutMinusOnes.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      continue;
    }
    arr[i] = withoutMinusOnes.shift();
  }
  return arr;
}

module.exports = {
  sortByHeight,
};

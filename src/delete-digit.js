/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = -Infinity;
  const digitArr = n.toString().split("");
  for (let i = 0; i < digitArr.length; i++) {
    const candidate = Number(
      [...digitArr.slice(0, i), ...digitArr.slice(i + 1)].join("")
    );
    if (candidate > maxNum) {
      maxNum = candidate;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};

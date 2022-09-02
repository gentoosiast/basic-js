/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const output = [];
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    count++;
    if (str[i + 1] !== str[i]) {
      output.push(count > 1 ? `${count}${str[i]}` : str[i]);
      count = 0;
    }
  }
  return output.join("");
}

module.exports = {
  encodeLine,
};

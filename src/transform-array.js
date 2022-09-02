/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (typeof arr !== "object" || !(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem === "--discard-prev") {
      output.pop();
    } else if (elem === "--discard-next") {
      i++;
      if (
        i + 1 < arr.length &&
        (arr[i + 1] === "--double-prev" || arr[i + 1] === "--discard-prev")
      ) {
        i++;
      }
    } else if (elem === "--double-prev") {
      if (output.length > 0) {
        output.push(output[output.length - 1]);
      }
    } else if (elem === "--double-next") {
      if (i !== arr.length - 1) {
        output.push(arr[i + 1]);
      }
    } else {
      output.push(elem);
    }
  }

  return output;
}

module.exports = {
  transform,
};

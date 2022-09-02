/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;
  const occurences = new Map();
  for (const ch of s1) {
    if (occurences.has(ch)) {
      occurences.set(ch, occurences.get(ch) + 1);
    } else {
      occurences.set(ch, 1);
    }
  }
  for (const ch of s2) {
    if (occurences.has(ch)) {
      const qty = occurences.get(ch);
      if (qty > 0) {
        occurences.set(ch, qty - 1);
        commonChars++;
      }
    }
  }
  return commonChars;
}

module.exports = {
  getCommonCharacterCount,
};

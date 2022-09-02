/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const result = [];
  let repeatStr = String(str);
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? "+";

  if ("addition" in options) {
    repeatStr += repeater(options.addition, {
      repeatTimes: options.additionRepeatTimes ?? 1,
      separator: options.additionSeparator ?? "|",
    });
  }

  for (let i = 0; i < repeatTimes; i++) {
    result.push(repeatStr);
  }

  return result.join(separator);
}

module.exports = {
  repeater,
};

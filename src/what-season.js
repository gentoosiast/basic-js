/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }
  if (typeof date !== "object" || !(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  try {
    date.getTime();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  const monthNum = date.getMonth();
  if ([11, 0, 1].includes(monthNum)) {
    return "winter";
  } else if ([2, 3, 4].includes(monthNum)) {
    return "spring";
  } else if ([5, 6, 7].includes(monthNum)) {
    return "summer";
  } else {
    return "fall";
  }
}

module.exports = {
  getSeason,
};

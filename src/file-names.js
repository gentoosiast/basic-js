/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const occurences = new Map();
  return names.map((fname) => {
    if (occurences.has(fname)) {
      const suffix = occurences.get(fname) + 1;
      occurences.set(fname, suffix);
      occurences.set(`${fname}(${suffix})`, 0);
      return `${fname}(${suffix})`;
    } else {
      occurences.set(fname, 0);
      return fname;
    }
  });
}

module.exports = {
  renameFiles,
};

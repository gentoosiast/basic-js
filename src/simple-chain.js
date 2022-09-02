/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _data: [],

  getLength() {
    return this._data.length;
  },

  addLink(val = "") {
    this._data.push(String(val));
    return this;
  },

  removeLink(pos) {
    if (
      typeof pos !== "number" ||
      !Number.isInteger(pos) ||
      this.getLength() === 0 ||
      pos > this.getLength() ||
      pos < 1
    ) {
      this._data = [];
      throw new Error("You can't remove incorrect link!");
    }
    const idx = pos - 1;
    this._data = [...this._data.slice(0, idx), ...this._data.slice(idx + 1)];
    return this;
  },

  reverseChain() {
    this._data.reverse();
    return this;
  },

  finishChain() {
    const chain = `( ${this._data.join(" )~~( ")} )`;
    this._data = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};

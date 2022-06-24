"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (from >= this._to) {
      throw new RangeError("From must be less then to");
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (to <= this._from) {
      throw new RangeError("To must be bigger then from");
    }
    this._to = to;
  }
  get range() {
    return [this._from, this._to];
  }
  validate(number) {
    if (number >= this._from && number <= this._to) {
      return number;
    }
    throw new RangeError("The range doesn't contain this number.");
  }
}

const rangeNumbers = new RangeValidator(2, 5);

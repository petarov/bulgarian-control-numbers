/**
 * ЛНЧ - Личен номер на чужденец се издава на всички чужденци, които
 * възнамеряват да пребивават продължително време в България. Издава се от МВР.
 */

const CONTROLS = [21, 19, 17, 13, 11, 9, 7, 3, 1];

class PersonalNumber {
  constructor(value) {
    if (typeof value !== "string") {
      throw new Error(value + " is not of type string!");
    }

    this._value = value;
  }

  get value() {
    return this._value;
  }

  isValid = () => {
    if (this._value.length !== 10) {
      return false;
    }

    let sum = ~~this._value.charAt(0);

    for (let i = 1; i < this._value.length - 1; i++) {
      sum += ~~this._value.charAt(i) * CONTROLS[i];
    }

    const mod = sum % 10;
    return mod === ~~this._value.charAt(9);
  };
}

export default PersonalNumber;

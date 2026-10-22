import PersonalNumber from "./pn";
import EGN from "./egn";
import Bulstat from "./bulstat";
import IBAN from "./iban";

class BGCN {
  static personalNumber = (value) => {
    return new PersonalNumber(value);
  };

  static pn = (value) => {
    return this.personalNumber(value);
  };

  static egn = (value) => {
    return new EGN(value);
  };

  static bulstat = (value) => {
    if (typeof value === "string" && value.length === 10) {
      // 10 знака е Булстат, който е еднакъв с ЕГН на търговеца
      return new EGN(value);
    }
    return new Bulstat(value);
  };

  static iban = (value) => {
    return new IBAN(value);
  };

  static isValid = (value) => {
    if (typeof value !== "string") {
      return false;
    }

    value = value.replace(/\s/g, "");
    const hasPrefix = /^BG/i.test(value);

    switch (value.length) {
      case 22:
        return this.iban(value).isValid;
      case 9:
      case 13:
        return !hasPrefix && this.bulstat(value).isValid;
      case 11: // BGxxxxxxxxx
        return hasPrefix && this.bulstat(value).isValid;
      case 10:
        return this.egn(value).isValid || this.pn(value).isValid;
    }
    return false;
  };
}

export default BGCN;

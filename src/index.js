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
}

export default BGCN;

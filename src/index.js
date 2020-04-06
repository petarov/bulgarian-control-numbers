import PersonalNumber from "./pn";
import EGN from "./egn";
import Bulstat from "./bulstat";
import IBAN from "./iban";

class BGCN {
  static personalNumber = (number) => {
    return new PersonalNumber(number);
  };

  static pn = (number) => {
    return this.personalNumber(number);
  };

  static egn = (number) => {
    return new EGN(number);
  };

  static bulstat = (number) => {
    if (typeof number === "string" && number.length === 10) {
      // 10 знака е Булстат, който е еднакъв с ЕГН на търговеца
      return new EGN(number);
    }
    return new Bulstat(number);
  };

  static iban = (number) => {
    return new IBAN(number);
  };
}

export default BGCN;

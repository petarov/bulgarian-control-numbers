import PersonalNumber from "./personal-number";
import EGN from "./egn";

class BGC {
  static personalNumber = (number) => {
    return new PersonalNumber(number);
  };

  static egn = (number) => {
    return new EGN(number);
  };
}

export default BGC;

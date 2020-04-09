/**
 * IBAN е стандарт за международен номер на банкова сметка. Концепцията за
 * международен номер на банкова сметка (International Bank Account Number) е
 * разработена от Европейския комитет за банкови стандарти (EBS 204/август 2003)
 * съвместно с Международната организация по стандартизация (ISO) и е
 * международно признат стандарт ISO 13616:2003. В България е приет от
 * Българския комитет по стандартизация, като стандарт БДС ISO 13616:2004
 * Международен номер на банкова сметка (IBAN) на Българския институт по
 * стандартизация.
 *
 * BGkk bbbb ssss ttcc cccc cc
 *
 * b = BIC bank code
 * s = Branch (BAE) number
 * t = Account type
 * c = Account number
 */

const MAX_LEN = 22;

class IBAN {
  constructor(value) {
    if (typeof value !== "string") {
      throw new Error(`${value} is not of type string!`);
    }

    value = value.replace(/\s/g, "");
    if (value.length !== MAX_LEN) {
      throw new Error(`${value} is not of size ${MAX_LEN}!`);
    }

    this._value = value;
    this._bic = `${value.substr(4, 4)}BGSF`;
    this._accountNo = value.substring(14);
  }

  get value() {
    return this._value;
  }

  get bic() {
    return this._bic;
  }

  get accountNo() {
    return this._accountNo;
  }

  // credits go to - https://stackoverflow.com/a/16019504
  _modulo = (divident, divisor) => {
    var partLength = 10;

    while (divident.length > partLength) {
      var part = divident.substring(0, partLength);
      divident = (part % divisor) + divident.substring(partLength);
    }

    return divident % divisor;
  };

  get isValid() {
    // Rearrange
    let transformed = this._value.substring(4) + this._value.substr(0, 4);

    // Convert to integer
    const digits = [];

    for (let i = 0; i < transformed.length; i++) {
      const ch = transformed.charAt(i);
      if (ch >= "a" && ch <= "z") {
        digits[i] = ch.charCodeAt(0) - 97 + 10;
      } else if (ch >= "A" && ch <= "Z") {
        digits[i] = ch.charCodeAt(0) - 65 + 10;
      } else {
        digits[i] = ch;
      }
    }

    // Compute remainder
    return 1 === this._modulo(digits.join(""), 97);
  }
}

export default IBAN;

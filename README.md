Bulgarian Control Numbers
==========================

[![CircleCI](https://circleci.com/gh/petarov/bulgarian-control-numbers.svg?style=svg)](https://circleci.com/gh/petarov/bulgarian-control-numbers)


:bulgaria: Проверка на контролни цифри ползвани в България - ЕГН, ЛНЧ, Булстат, IBAN.

# Install

    yarn install bulgarian-control-numbers

# Usage

As a node.js module:

```javascript
const BGCN = require('bulgarian-control-numbers');

const egn = BGCN.egn('0550290476');
egn.isValid(); // true
egn.value // '0550290476'
egn.gender // 'f'
egn.birthday.day // 29
egn.birthday.month // 10
egn.birthday.year // 2005

const lnch = BGCN.pn('1001122334');
egn.isValid(); // true

const bulstat = BGCN.bulstat('BG131071587')
bulstat.isValid(); // true
bulstat.value // '131071587'

const iban = BGCN.iban('BG15UNCR70001522604629');
iban.isValid() // true
iban.value // 'BG15UNCR70001522604629'
iban.accountNo // '22604629'
iban.bic // 'UNCRBGSF'
```

In a web page:

```html
<script type="text/javascript" src="bgcn-1.0.0.js"></script>
<script>
    var egn = BGCN.egn('0550290476');
    // ...
</script>
```

# Development

Run `yarn install` to setup dependencies.

Run `yarn test` to run unit tests.

Run `yarn build` to produce distributable.

# References

* [БСВ Консултинг - Контролни цифри ползвани в България](http://bsv-bg.com/контролни-цифри-ползвани-в-българия)
* [Единен граждански номер](https://bg.wikipedia.org/wiki/Единен_граждански_номер)
* [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number)

# License

[MIT](LICENSE)

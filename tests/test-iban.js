import BGCN from '../src/index';

test('invalid БУЛСТАТ numbers', () => {
  expect(() => BGCN.iban('tovaenevalideniban')).toThrow();
  expect(() => BGCN.iban(8096611020345678)).toThrow();
  expect(BGCN.iban('BG80 BNBG 9661 1010 1010 10').isValid).toBeFalsy();
});

test('valid IBAN numbers', () => {
  let iban = BGCN.iban('BG80 BNBG 9661 1020 3456 78'); // BNB
  expect(iban.isValid).toBeTruthy();
  expect(iban.value).toBe('BG80BNBG96611020345678');
  expect(iban.accountNo).toBe('20345678');
  expect(iban.bic).toBe('BNBGBGSF');

  iban = BGCN.iban('BG15UNCR70001522604629'); // УНИКРЕДИТ БУЛБАНК АД
  expect(iban.isValid).toBeTruthy();
  expect(iban.value).toBe('BG15UNCR70001522604629');
  expect(iban.accountNo).toBe('22604629');
  expect(iban.bic).toBe('UNCRBGSF');

  iban = BGCN.iban('BG 24 SOMB 9130 84 134430 44'); // ОБЩИНСКА БАНКА
  expect(iban.isValid).toBeTruthy();
  expect(iban.value).toBe('BG24SOMB91308413443044');
  expect(iban.accountNo).toBe('13443044');
  expect(iban.bic).toBe('SOMBBGSF');
});
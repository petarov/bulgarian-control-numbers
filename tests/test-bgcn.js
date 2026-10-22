import BGCN from '../src/index';

test('invalid BGCN numbers', () => {
  expect(BGCN.isValid('131071587131071587')).toBeFalsy();
  expect(BGCN.isValid('ABCDFGH')).toBeFalsy();
});

test('isValid does not throw on non-string input', () => {
  expect(BGCN.isValid(131071587)).toBeFalsy();
  expect(BGCN.isValid(null)).toBeFalsy();
  expect(BGCN.isValid(undefined)).toBeFalsy();
  expect(BGCN.isValid({})).toBeFalsy();
  expect(BGCN.isValid(Symbol('x'))).toBeFalsy();
});

test('isValid does not throw on unrecognized string input', () => {
  expect(BGCN.isValid('01234567890')).toBeFalsy(); // 11 chars, no BG prefix
  expect(BGCN.isValid('bg123456789')).toBeFalsy(); // lowercase prefix
  expect(BGCN.isValid('BG1234567')).toBeFalsy(); // 9 chars, BG + 7
  expect(BGCN.isValid('BG12345678901')).toBeFalsy(); // 13 chars, BG + 11
});

test('valid BGCN numbers', () => {
  expect(BGCN.isValid('131071587')).toBeTruthy();
  expect(BGCN.isValid('BG131071587')).toBeTruthy();
  expect(BGCN.isValid('0000568780291')).toBeTruthy();
  expect(BGCN.isValid('BG 24 SOMB 9130 84 134430 44')).toBeTruthy();
  expect(BGCN.isValid('BG15UNCR70001522604629')).toBeTruthy();
  expect(BGCN.isValid('0550290476')).toBeTruthy();
  expect(BGCN.isValid('1004507764')).toBeTruthy();
});
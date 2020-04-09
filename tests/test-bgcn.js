import BGCN from '../src/index';

test('invalid BGCN numbers', () => {
  expect(() => BGCN.isValid(131071587)).toThrow();
  expect(() => BGCN.isValid('01234567890')).toThrow(); // recognized as bulstat
  expect(BGCN.isValid('131071587131071587')).toBeFalsy();
  expect(BGCN.isValid('ABCDFGH')).toBeFalsy();
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
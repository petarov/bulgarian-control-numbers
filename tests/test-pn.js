import BGCN from '../src/index';

test('invalid ЛНЧ numbers', () => {
  expect(() => BGCN.personalNumber(1234567890)).toThrow();
  expect(BGCN.pn('1001122334').isValid).toBeFalsy();
  expect(BGCN.pn('7007712777').isValid).toBeFalsy();
});

test('valid ЛНЧ numbers', () => {
  let pn = BGCN.personalNumber('1004507764');
  expect(pn.isValid).toBeTruthy();
  expect(pn.value).toBe('1004507764');

  pn = BGCN.pn('1004495667');
  expect(pn.isValid).toBeTruthy();
  expect(pn.value).toBe('1004495667');
});
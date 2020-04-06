import BGC from '../src/index';

test('invalid ЛНЧ numbers', () => {
  expect(() => BGC.personalNumber(1234567890)).toThrow();
  expect(BGC.pn('1001122334').isValid()).toBeFalsy();
  expect(BGC.pn('7007712777').isValid()).toBeFalsy();
});

test('valid ЛНЧ numbers', () => {
  let pn = BGC.personalNumber('1004507764');
  expect(pn.isValid()).toBeTruthy();
  expect(pn.value).toBe('1004507764');

  pn = BGC.pn('1004495667');
  expect(pn.isValid()).toBeTruthy();
  expect(pn.value).toBe('1004495667');
});
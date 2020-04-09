import BGCN from '../src/index';

test('invalid ЕГН numbers', () => {
  expect(() => BGCN.egn(1234567890)).toThrow();
  expect(() => BGCN.egn('123')).toThrow();
  expect(BGCN.egn('9929291278').isValid).toBeFalsy();
});

test('valid ЕГН numbers', () => {
  let egn = BGCN.egn('0550290476');
  expect(egn.isValid).toBeTruthy();
  expect(egn.value).toBe('0550290476');
  expect(egn.gender).toBe('f');
  expect(egn.birthday.day).toBe(29);
  expect(egn.birthday.month).toBe(10);
  expect(egn.birthday.year).toBe(2005);

  egn = BGCN.egn('0844298231');
  expect(egn.isValid).toBeTruthy();
  expect(egn.value).toBe('0844298231');
  expect(egn.gender).toBe('f');
  expect(egn.birthday.day).toBe(29);
  expect(egn.birthday.month).toBe(4);
  expect(egn.birthday.year).toBe(2008);

  egn = BGCN.egn('6101057509');
  expect(egn.isValid).toBeTruthy();
  expect(egn.value).toBe('6101057509');
  expect(egn.gender).toBe('m');
  expect(egn.birthday.day).toBe(5);
  expect(egn.birthday.month).toBe(1);
  expect(egn.birthday.year).toBe(1961);

  egn = BGCN.egn('8809268343');
  expect(egn.isValid).toBeTruthy();
  expect(egn.value).toBe('8809268343');
  expect(egn.gender).toBe('m');
  expect(egn.birthday.day).toBe(26);
  expect(egn.birthday.month).toBe(9);
  expect(egn.birthday.year).toBe(1988);

  egn = BGCN.egn('9708265965');
  expect(egn.isValid).toBeTruthy();
  expect(egn.value).toBe('9708265965');
  expect(egn.gender).toBe('m');
  expect(egn.birthday.day).toBe(26);
  expect(egn.birthday.month).toBe(8);
  expect(egn.birthday.year).toBe(1997);
});
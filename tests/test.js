import BGC from '../src/index';

test('valid БУЛСТАТ numbers', () => {
  let bs = BGC.bulstat('131071587'); // Лидл
  expect(bs.isValid()).toBeTruthy();
  expect(bs.value).toBe('131071587');

  bs = BGC.bulstat('BG131129282'); // Кауфланд
  expect(bs.isValid()).toBeTruthy();
  expect(bs.value).toBe('131129282');

  bs = BGC.bulstat('130007884'); // Билла
  expect(bs.isValid()).toBeTruthy();
  expect(bs.value).toBe('130007884');

  bs = BGC.bulstat('130408101'); // Булсатком
  expect(bs.isValid()).toBeTruthy();
  expect(bs.value).toBe('130408101');

  bs = BGC.bulstat('0009039460577'); // Социални услуги в общността поделение
  expect(bs.isValid()).toBeTruthy();
  expect(bs.value).toBe('0009039460577');
});

test('valid ЛНЧ numbers', () => {
  expect(() => BGC.personalNumber(1234567890)).toThrow();

  let pn = BGC.personalNumber('1004507764');
  expect(pn.isValid()).toBeTruthy();
  expect(pn.value).toBe('1004507764');

  pn = BGC.personalNumber('1004495667');
  expect(pn.isValid()).toBeTruthy();
  expect(pn.value).toBe('1004495667');

  expect(BGC.personalNumber('1001122334').isValid()).toBeFalsy();
  expect(BGC.personalNumber('7007712777').isValid()).toBeFalsy();
});

test('valid ЕГН numbers', () => {
  expect(() => BGC.egn(1234567890)).toThrow();
  expect(() => BGC.egn('123')).toThrow();
  expect(BGC.egn('9929291278').isValid()).toBeFalsy();

  let egn = BGC.egn('0550290476');
  expect(egn.isValid()).toBeTruthy();
  expect(egn.value).toBe('0550290476');
  expect(egn.gender).toBe('f');
  expect(egn.birthday.day).toBe(29);
  expect(egn.birthday.month).toBe(10);
  expect(egn.birthday.year).toBe(2005);

  egn = BGC.egn('0844298231');
  expect(egn.isValid()).toBeTruthy();
  expect(egn.value).toBe('0844298231');
  expect(egn.gender).toBe('f');
  expect(egn.birthday.day).toBe(29);
  expect(egn.birthday.month).toBe(4);
  expect(egn.birthday.year).toBe(2008);

  egn = BGC.egn('6101057509');
  expect(egn.isValid()).toBeTruthy();
  expect(egn.value).toBe('6101057509');
  expect(egn.gender).toBe('m');
  expect(egn.birthday.day).toBe(5);
  expect(egn.birthday.month).toBe(1);
  expect(egn.birthday.year).toBe(1961);

  egn = BGC.egn('8809268343');
  expect(egn.isValid()).toBeTruthy();
  expect(egn.value).toBe('8809268343');
  expect(egn.gender).toBe('m');
  expect(egn.birthday.day).toBe(26);
  expect(egn.birthday.month).toBe(9);
  expect(egn.birthday.year).toBe(1988);

  egn = BGC.egn('9708265965');
  expect(egn.isValid()).toBeTruthy();
  expect(egn.value).toBe('9708265965');
  expect(egn.gender).toBe('m');
  expect(egn.birthday.day).toBe(26);
  expect(egn.birthday.month).toBe(8);
  expect(egn.birthday.year).toBe(1997);
});

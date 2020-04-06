import BGC from '../src/index';

test('invalid БУЛСТАТ numbers', () => {
  expect(() => BGC.bulstat(123)).toThrow();
  expect(() => BGC.bulstat('123')).toThrow();
});

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

  bs = BGC.bulstat('6101057509'); // ЕТ/ЕГН
  expect(bs.isValid()).toBeTruthy();
  expect(bs.value).toBe('6101057509');

  bs = BGC.bulstat('0000568780291'); // Община Средец
  expect(bs.isValid()).toBeTruthy();
  expect(bs.value).toBe('0000568780291');
});
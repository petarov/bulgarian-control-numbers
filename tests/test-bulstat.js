import BGCN from '../src/index';

test('invalid БУЛСТАТ numbers', () => {
  expect(() => BGCN.bulstat(123)).toThrow();
  expect(() => BGCN.bulstat('123')).toThrow();
});

test('valid БУЛСТАТ numbers', () => {
  let bs = BGCN.bulstat('131071587'); // Лидл
  expect(bs.isValid).toBeTruthy();
  expect(bs.value).toBe('131071587');

  bs = BGCN.bulstat('BG131129282'); // Кауфланд
  expect(bs.isValid).toBeTruthy();
  expect(bs.value).toBe('131129282');

  bs = BGCN.bulstat('130007884'); // Билла
  expect(bs.isValid).toBeTruthy();
  expect(bs.value).toBe('130007884');

  bs = BGCN.bulstat('130408101'); // Булсатком
  expect(bs.isValid).toBeTruthy();
  expect(bs.value).toBe('130408101');

  bs = BGCN.bulstat('0009039460577'); // Социални услуги в общността поделение
  expect(bs.isValid).toBeTruthy();
  expect(bs.value).toBe('0009039460577');

  bs = BGCN.bulstat('6101057509'); // ЕТ/ЕГН
  expect(bs.isValid).toBeTruthy();
  expect(bs.value).toBe('6101057509');

  bs = BGCN.bulstat('0000568780291'); // Община Средец
  expect(bs.isValid).toBeTruthy();
  expect(bs.value).toBe('0000568780291');
});
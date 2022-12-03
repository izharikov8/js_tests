import healthSort from '../js/matchers';

test('checkSortingOne', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = healthSort(data);
  expect(result[0].health).toBe(100);
});

test('checkSortingTwo', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = healthSort(data);
  expect(result[1].health).toEqual(80);
});

test('checkSortingThree', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = healthSort(data);
  expect(result[2].health).toBe(10);
});

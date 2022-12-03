import defineHealth from '../js/define';

test('defineHealthy', () => {
  const char = { name: 'Маг', health: 90 };
  const result = defineHealth(char);
  expect(result).toBe('healthy');
});

test('defineWounded', () => {
  const char = { name: 'Маг', health: 49 };
  const result = defineHealth(char);
  expect(result).toBe('wounded');
});

test('defineCritical', () => {
  const char = { name: 'Маг', health: 12 };
  const result = defineHealth(char);
  expect(result).toBe('critical');
});

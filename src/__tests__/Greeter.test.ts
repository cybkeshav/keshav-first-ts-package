import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Keshav first test')).toBe('Hello Keshav first test');
});
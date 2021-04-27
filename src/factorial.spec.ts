import { factorial } from './factorial';
describe('factorial', () => {
  test('for 4', () => {
    expect(factorial(4)).toEqual(24);
  });
  test('for 8', () => {
    expect(factorial(8)).toEqual(40320);
  });
});

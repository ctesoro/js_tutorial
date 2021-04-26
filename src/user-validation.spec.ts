import { usernameValidation } from './user-validation';
describe('validate username', () => {

  test('return false', () => {
    expect(usernameValidation('aa_')).toEqual(false);
  });
  test('return true', () => {
    expect(usernameValidation('u__hello_world123')).toEqual(true);
  });
});

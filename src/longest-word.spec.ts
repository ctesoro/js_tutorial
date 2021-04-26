import { longestWord } from './longest-word';
describe('validate username', () => {

  test('return time', () => {
    expect(longestWord('fun&!! time')).toEqual('time');
  });
  test('return love', () => {
    expect(longestWord('I love dogs')).toEqual('love');
  });
});

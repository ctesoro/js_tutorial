export const factorial = (num: number): number => {
  let result = 1;
  for (let i = num; i > 1; --i) {
    result *= i;
  }
  return result;
};

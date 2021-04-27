export const numbersMax = (numArr: number[]): number => {
  const initialValue = numArr[0];

  let maxValue = initialValue;
  for (let i=1; i < numArr.length; ++i){
    if (numArr[i] > maxValue)
    {
        maxValue = numArr[i];
    }
  }
  return maxValue;
};

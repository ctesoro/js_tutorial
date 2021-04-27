export const findFactors = (numArr: number[], inputNumber: number) => {
    const factors = [];

  for (let i=0; i < numArr.length; ++i){

    if (numArr[i] % inputNumber == 0)
    {
        factors.push(numArr[i]);
    }
  }
  return factors;
};

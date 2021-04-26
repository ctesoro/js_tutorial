export const longestWord = (arrset: string): string => {
  const strSplit = arrset.split(' ');

  let longestWord = ' ';

  for (let i = 0; i < strSplit.length; i++) {
    if (((strSplit[i].length) - strSplit[i].replace(/[a-zA-Z]+/, "").length) >
      (longestWord.length - longestWord.replace(/[a-zA-Z]+/, "").length)) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
};

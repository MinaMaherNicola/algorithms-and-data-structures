const mergeV3 = (arrOne = [], arrTwo = []) => {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i <= arrOne.length && j <= arrTwo.length) {
    if (i === arrOne.length) {
      newArr = [...newArr, ...arrTwo.slice(j, arrTwo.length)];
      break;
    } else if (j === arrTwo.length) {
      newArr = [...newArr, ...arrOne.slice(i, arrOne.length)];
      break;
    }

    if (arrOne[i] > arrTwo[j]) {
      newArr.push(arrTwo[j]);
      j++;
      continue;
    } else {
      newArr.push(arrOne[i]);
      i++;
      continue;
    }
  }
  return newArr;
};

console.log(mergeV3([10, 20, 30, 100], [5, 200, 300]));

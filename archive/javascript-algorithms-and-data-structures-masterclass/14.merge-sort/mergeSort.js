const merge = (arrOne, arrTwo) => {
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

const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([6, 2, 10, 30]));

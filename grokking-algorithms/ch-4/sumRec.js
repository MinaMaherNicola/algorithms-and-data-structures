const sumRec = arr => {
  if (arr.length === 0) return -1;

  if (arr.length === 1) {
    return arr[0];
  }
  return arr[arr.length - 1] + sumRec(arr.filter((element, index) => index !== arr.length - 1));
};

const array = [2, 4, 10, 4, 50];
const array2 = [];

console.log(sumRec(array));

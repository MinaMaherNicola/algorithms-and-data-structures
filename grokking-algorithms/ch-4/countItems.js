const countItems = (arr = []) => {
  if (arr.length === 0) return -1;

  if (arr.length === 1) {
    return 1;
  }
  return 1 + countItems(arr.filter((element, index) => index !== arr.length - 1));
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(countItems(array));

const bubbleSort = (arr) => {
  let length = arr.length;

  while (length !== 0) {
    for (let i = 0; i < length - 1; i++) {
      console.log(`i: ${i} | i + 1: ${i + 1}`);
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      } else {
        continue;
      }
    }
    length--;
  }
  return arr;
};

const array = [5, 4, 3, 2, 1, 0];
console.log(bubbleSort(array));

const bubbleSort = (arr) => {
  let length = arr.length;

  while (length !== 0) {
    for (let i = 0; i < length - 1; i++) {
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

console.log('RAN: ' + bubbleSort([1, 5, 7, 3, 4, 66, 12, 73, 99, 23, 854]));
console.log('REV: ' + bubbleSort([854, 99, 73, 66, 32, 12, 7, 5, 4, 3, 1]));
console.log('NRS: ' + bubbleSort([1, 3, 4, 5, 7, 32, 12, 66, 99, 854, 73]));

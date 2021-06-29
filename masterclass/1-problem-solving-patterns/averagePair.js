const averagePair = (array, avg) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const result = (array[left] + array[right]) / 2;
    if (result === avg) {
      return true;
    } else if (result > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5));

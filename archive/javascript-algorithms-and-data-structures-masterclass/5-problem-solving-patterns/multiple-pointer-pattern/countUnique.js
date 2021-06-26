function countUnique(arr) {
  if (arr.length === 0 || arr.length === undefined) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let counter = 0;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
      if (arr[left] != arr[right]) {
        left++;
        arr.splice(left, right - left);
        right = left + 1;
      }
    } else {
      left++;
      right++;
    }
  }
  return arr.length;
}

// console.log(countUnique([-8, -1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 9, 9]));
console.log(countUnique([1, 1, 1, 1, 1, 2])); // 2
console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUnique([])); // 0
console.log(countUnique([-2, -1, -1, 0, 1])); // 4

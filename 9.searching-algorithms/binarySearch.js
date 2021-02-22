const binarySearch = (arr, val) => {
  let right = arr.length - 1;
  let left = 0;
  let mid = Math.ceil((right - left) / 2);

  while (mid !== right) {
    mid = Math.ceil((right - left) / 2);
    mid += left;
    if (arr[mid] === val) {
      return mid;
    } else if (val > arr[mid]) {
      left = mid + 1;
      continue;
    } else if (val < arr[mid]) {
      right = mid - 1;
      continue;
    }
  }
  return -1;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(binarySearch(list, 20));

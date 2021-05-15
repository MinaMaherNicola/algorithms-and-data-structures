/* 
1. binarySearch function takes a sorted array and an item
2. if the item is in the array, the function returns its position
3. you will keep track of what part of the array you have to search through

EXERCIES
1.1 Suppose you have a sorted list of 128 items, and you're searching through it using binary search. What's the maximum number of steps it would take?
- 7

1.2 Suppose you double the size of the list, what's the maximum number of steps now?
- 8
*/

const binarySearch = (arr = [], item) => {
  let left = 0,
    right = arr.length - 1,
    mid = Math.floor(arr.length / 2);

  while (!(left > right)) {
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      right = mid - 1;
      mid = Math.floor(right / 2);
      continue;
    } else if (arr[mid] < item) {
      left = mid + 1;
      mid = Math.floor((right + left) / 2);
      continue;
    }
  }
  return 'Element not found!';
};

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(array, 0));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 2));
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 4));
console.log(binarySearch(array, 5));
console.log(binarySearch(array, 6));
console.log(binarySearch(array, 7));
console.log(binarySearch(array, 8));
console.log(binarySearch(array, 9));
console.log(binarySearch(array, 10));
console.log(binarySearch(array, 15));
console.log(binarySearch(array, -5));

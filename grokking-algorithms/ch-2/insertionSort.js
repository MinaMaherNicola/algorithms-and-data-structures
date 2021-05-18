const findSmallest = arr => {
  let index = 0;
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      index = i;
    }
  }
  return index;
};

const insertionSort = arr => {
  let newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    console.log(i);
    newArr.push(arr.splice(findSmallest(arr), 1)[0]);
  }
  return newArr;
};

console.log(insertionSort([51, 42, 1, 4, 0, 16, 99, 13, 70]));

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

const list = [1, 2, 5, 62, 724, 753, 6243, 1234, 7, 4, 3];

console.log(linearSearch(list, 3));

const insertionSort = (arr) => {
  let holder,
    current = 0;
  const length = arr.length;
  let num = 0;

  console.log(`Array before starting: ${arr}`);
  for (let i = 0; i < length; i++) {
    num++;
    for (let j = 0; j < i; j++) {
      num++;
      if (arr[i] < arr[j]) {
        holder = arr[i];
        arr[i] = arr[j];
        arr[j] = holder;
      }
    }
    console.log(`At ${i} Array: ${arr}`);
  }
  console.log(num);
};
// const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const array = [1, 2, 3, 4, -1];
insertionSort(array);

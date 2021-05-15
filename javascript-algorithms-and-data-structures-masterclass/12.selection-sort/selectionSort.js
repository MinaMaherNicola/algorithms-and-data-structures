const selectionSort = (arr) => {
  let swapIndex, holder;
  let length = arr.length;
  console.log(`Array Before: ${arr}`);

  for (let i = 0; i < length; i++) {
    swapIndex = i;
    num++;
    for (let j = i + 1; j < length; j++) {
      num++;
      if (arr[i] > arr[j]) {
        swapIndex = j;
      }
    }
    holder = arr[i];
    arr[i] = arr[swapIndex];
    arr[swapIndex] = holder;
    console.log(`Array at iteration ${i}: ${arr}`);
  }
};

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
selectionSort(array);

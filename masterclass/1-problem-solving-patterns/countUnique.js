const countUniqueValues = array => {
  let left = 0;
  let right = 0;
  const unique = [array[left]];
  while (right <= array.length) {
    if (array[left] === array[right]) {
      right++;
    } else if (array[left] !== array[right]) {
      unique.push(array[right]);
      left = right;
      right++;
    }
  }
  return unique.length - 1;
};

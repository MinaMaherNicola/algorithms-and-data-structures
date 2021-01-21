function areThereDuplicates() {
  if (arguments.length < 2) {
    return false;
  }

  let pointer = 1;
  for (let i = 0; i < arguments.length; ) {
    if (arguments[i] === arguments[pointer]) {
      return true;
    } else {
      if (pointer >= arguments.length - 1) {
        i++;
        pointer = i + 1;
      } else {
        pointer++;
      }
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6));
// areThereDuplicates(1, 2, 3);
// areThereDuplicates(1, '2', 'a');

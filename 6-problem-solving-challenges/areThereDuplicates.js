function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let pointer = 1;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[pointer]) {
      return true;
    } else {
      pointer++;
    }
  }

  return false;
}

// console.log(areThereDuplicates(1, 2, 3, 4, 5, 6));
// areThereDuplicates(1, 2, 3);
console.log(areThereDuplicates('a', '2', 'a'));

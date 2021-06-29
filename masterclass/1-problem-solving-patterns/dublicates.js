const areThereDuplicates = (...args) => {
  const freq = {};
  for (let i = 0; i < args.length; i++) {
    if (freq[args[i]]) {
      return true;
    } else {
      freq[args[i]] = (freq[args[i]] | 0) + 1;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3, 4));

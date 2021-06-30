const isSubsequence = (str1, str2) => {
  let left = 0;
  let right = 0;

  while (left < str1.length) {
    if (str1[left] === str2[right]) {
      left++;
      right++;
      continue;
    }
    if (str1[left] !== str2[right]) {
      if (right === str2.length - 1) {
        return false;
      }
      right++;
      continue;
    }
  }
  return true;
};

console.log(isSubsequence('sing', 'string'));

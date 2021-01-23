const findLongestSubstring = (str) => {
  let left = 0;
  let right = 1;
  let counter = 0;
  let subString = '';

  while (right < str.length) {
    if (str[left] !== str[right]) {
      subString += str[left];
    } else {
      left++;
      right++;
    }
  }
  return subString.length;
};

// console.log(findLongestSubstring('jjjihggggfeddcbaa'));
// console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
// console.log(findLongestSubstring('thisisawesome'));
// console.log(findLongestSubstring('thecatinthehat'));
// console.log(findLongestSubstring('bbbb'));
// console.log(findLongestSubstring('longestsubstring'));
// console.log(findLongestSubstring('thisishowwedoit'));

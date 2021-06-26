function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;

  let pointer1 = 0;
  let pointer2 = 0;
  let counter = 0;

  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      counter++;
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }

  if (counter === str1.length) return true;
  return false;
}

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));

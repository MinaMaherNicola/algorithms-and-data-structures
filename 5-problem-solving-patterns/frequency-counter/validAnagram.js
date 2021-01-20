function validAnagram(str1, str2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = ++frequencyCounter1[str1[i]] || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    frequencyCounter2[str2[i]] = ++frequencyCounter2[str2[i]] || 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    } else {
      if (frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
      }
    }
  }
  return true;
}

console.log(validAnagram('texttwisttime', 'timetwisttext'));

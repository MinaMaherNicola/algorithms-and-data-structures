const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const counter1 = {};
  const counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    counter1[str1[i]] = (counter1[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str1.length; i++) {
    counter2[str2[i]] = (counter2[str2[i]] || 0) + 1;
  }

  for (key in counter1) {
    if (!(key in counter2)) {
      return false;
    }

    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
};

console.log(anagrams('qwerty', 'qeywrt'));

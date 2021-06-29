const sameFrequency = (first, second) => {
  const strOne = first.toString();
  const strTwo = second.toString();
  if (strOne.length !== strTwo.length) {
    return false;
  }

  const freqOne = {};
  const freqTwo = {};

  for (let i = 0; i < strOne.length; i++) {
    freqOne[strOne[i]] = (freqOne[strOne[i]] | 0) + 1;
  }

  for (let i = 0; i < strTwo.length; i++) {
    freqTwo[strTwo[i]] = (freqTwo[strTwo[i]] | 0) + 1;
  }

  for (key in freqOne) {
    if (!(key in freqTwo)) {
      return false;
    }

    if (freqOne[key] !== freqTwo[key]) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(1832, 2318));

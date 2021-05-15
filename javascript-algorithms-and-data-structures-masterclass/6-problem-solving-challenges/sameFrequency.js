function sameFrequency(int1, int2) {
  int1 = int1.toString();
  int2 = int2.toString();

  if (int1.length !== int2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < int1.length; i++) {
    obj1[int1[i]] = (obj1[int1[i]] || 0) + 1;
  }

  for (let i = 0; i < int2.length; i++) {
    obj2[int2[i]] = (obj2[int2[i]] || 0) + 1;
  }

  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  }

  return false;
}

console.log(sameFrequency(34, 14));

const countChar = (str) => {
  var counterObj = {};
  str = str.replace(/ /g, '').toLowerCase().split('');
  var chars = [];

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      chars.push(str[i]);
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] in counterObj) {
      const key = chars[i];
      counterObj[key] += 1;
    } else {
      const key = chars[i];
      counterObj[key] = 1;
    }
  }

  return counterObj;
};

console.log(countChar('qwkzac1251  qcw 1k1k75467868956856kzaaa1c'));

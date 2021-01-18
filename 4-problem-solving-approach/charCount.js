const countChar = (str) => {
  var counterObj = {};
  str = str.replace(/ /g, '').toLowerCase().split('');

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      let key = str[i];
      counterObj[key] = ++counterObj[key] || 1;
    }
  }

  return counterObj;
};

console.log(countChar('qwkzac1251  qcw 1k1k75467868956856kzaaa1c'));

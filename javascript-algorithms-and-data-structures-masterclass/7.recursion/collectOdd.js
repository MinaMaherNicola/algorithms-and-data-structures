const collectOdd = (arr) => {
  let list = [];
  if (arr.length === 0) return list;
  if (arr[0] % 2 !== 0) list.push(arr[0]);
  list = list.concat(collectOdd(arr.slice(1)));
  return list;
};

console.log(collectOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

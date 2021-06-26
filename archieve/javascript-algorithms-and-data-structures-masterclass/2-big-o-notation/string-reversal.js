const testString = '54321';
let reverseString = '';

for (let i = testString.length - 1; i >= 0; i--) {
  reverseString += testString[i];
}

console.log(reverseString);

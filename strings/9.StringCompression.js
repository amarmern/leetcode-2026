function compressString(str) {
  let result = '';
  let i = 0;
  while (i < str.length) {
    let count = 1;
    // count repeating characters
    while (i < str.length - 1 && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    result += str[i] + count;
    i++;
  }
  return result;
}

console.log(compressString('aaabbc')); // a3b2c1

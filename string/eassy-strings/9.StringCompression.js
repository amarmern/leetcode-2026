function compressString(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1; //reset count
    }
  }
  return result;
}

console.log(compressString('aaabbc')); // a3b2c1

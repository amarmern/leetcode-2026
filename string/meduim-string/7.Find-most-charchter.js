let string = 'abcabcbb';
//b -> 4

let charMap = {};
let max = 0;
let maxChar = '';
for (let str of string) {
  charMap[str] = (charMap[str] || 0) + 1;
}

for (let char in charMap) {
  if (charMap[char] > max) {
    max = charMap[char];
    maxChar = char;
  }
}
console.log(`${maxChar} -> ${max}`);

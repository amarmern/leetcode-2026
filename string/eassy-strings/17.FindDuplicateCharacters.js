/*Problem: Print all characters that appear more than once.
Example:
"programming" → r, g, m
*/

let str = 'programming';

let map = {};
for (let char of str) {
  map[char] = (map[char] || 0) + 1;
}

//console.log(map);
for (let char in map) {
  if (map[char] > 1) {
    console.log(char);
  }
}

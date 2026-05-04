/*Problem:Count how many times each character appears.
Example: "aabcc" → {a:2, b:1, c:2}
Concepts: HashMap / Object
*/
let str = 'aabcc';
let map = {};

for (let char of str) {
  map[char] = (map[char] || 0) + 1;
}
console.log(map);

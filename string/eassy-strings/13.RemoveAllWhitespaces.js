/*Problem: Remove spaces from a string.
Example: "h e l l o" → "hello"
*/
let str = 'h e l l o';
// let newStr1 = str.replace(/\s/g, '');
// console.log(newStr1);

let res = '';
for (let char of str) {
  if (char !== ' ') {
    res += char;
  }
}
console.log(res);

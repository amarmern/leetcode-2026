/*Problem:Compare two strings ignoring case sensitivity.
Example:
"Hello" & "hello" → true
Concepts: String normalization (toLowerCase())
*/

let s1 = 'Hello';
let s2 = 'hello';
const res = s1.toLowerCase() === s2.toLowerCase() ? true : false;
console.log(res);

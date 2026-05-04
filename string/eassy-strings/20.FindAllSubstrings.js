/*Problem: Print all possible substrings.
Example:
"abc" → a, ab, abc, b, bc, c
*/

function printSubString(str) {
  for (let i = 0; i < str.length; i++) {
    let subStr = '';

    for (let j = i; j < str.length; j++) {
      subStr += str[j];
      console.log(subStr);
    }
  }
}

printSubString('abc');

// second approach
function printSubstrings(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      console.log(str.slice(i, j));
    }
  }
}

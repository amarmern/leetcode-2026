/*Problem: Return length of last word in a string.
Example: "Hello World" → 5
*/
//Hello World".split(' ')[1].length

//“I traverse from the end, skip trailing spaces, then count until the next
// space—using O(1) space.”

function lengthOfLastWord(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      length++; // count characters
    } else if (length > 0) {
      // we already started counting and hit a space → stop
      break;
    }
  }
  return length;
}

// Example
console.log(lengthOfLastWord('Hello World')); // 5
/*
Traverse from end → start
Skip spaces automatically (since length === 0)
Start counting when first character appears
Stop when space comes after counting started
*/

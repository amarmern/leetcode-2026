/*Problem: Verify if string has only numeric characters.
Example:
"12345" → true, "123a" → false
*/

function isNumeric(str) {
  if (str.length === 0) return false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      return false;
    }
  }
  return true;
}

console.log(isNumeric('12345a'));

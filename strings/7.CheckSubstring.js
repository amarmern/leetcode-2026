//Check if one string is a substring of another.
//Example:
//"hello world" contains "world" → true

// using built in method

let str = 'hello world';
let sub = 'world';
//1. console.log(str.includes('world'));
//2. console.log(str.indexOf('world') !== -1);
//3. Sliding Window Approach (Important for interviews)

function isSubstring(str, sub) {
  for (i = 0; i <= str.length - sub.length; i++) {
    let match = true;
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}

console.log(isSubstring(str, sub));

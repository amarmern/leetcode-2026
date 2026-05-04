//This is called Horizontal Scanning
/*👉 Idea:
Take the first string as prefix
Compare it with every other string
Keep shrinking the prefix until it matches
*/
//["flower", "flow", "flight"] → "fl"

function longestCommonPrefix(arr) {
  if (arr.length === 0) return '';

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === '') return '';
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"

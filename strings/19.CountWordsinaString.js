//"Hello world from JS" → 4

function countWords(str) {
  let count = 0;
  let inWord = false;

  for (let ch of str) {
    if (ch !== ' ' && !inWord) {
      count++;
      inWord = true;
    } else if (ch === ' ') {
      inWord = false;
    }
  }

  return count;
}

console.log(countWords('Hello world from JS')); // 4
console.log(countWords('  Hello   world  ')); // 2

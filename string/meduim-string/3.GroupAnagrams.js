let arr = ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'];

function anagaram(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('').sort().join('');
    if (!obj[word]) {
      obj[word] = [];
    }
    obj[word].push(arr[i]);
  }
  return obj;
}

console.log(anagaram(arr));

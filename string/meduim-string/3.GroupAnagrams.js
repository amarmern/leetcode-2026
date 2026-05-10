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
// using reduce function
let arr = ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'];

const group = arr.reduce((acc, curr) => {
  // create sorted key
  let word = curr.split('').sort().join('');
  if (acc[word]) {
    acc[word].push(curr);
  } else {
    acc[word] = [curr];
  }
  return acc;
}, {});
console.log(group);

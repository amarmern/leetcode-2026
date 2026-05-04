//"hello" → "oellh"

let str = 'hello';
let arr = str.split('');
let newArr = ([arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]);
console.log(arr.join(' '));

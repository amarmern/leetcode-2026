//"programming" → "progamin" (order preserved)

let str = 'programming';

let obj = {};
let res = '';
for (let item of str) {
  if (!obj[item]) {
    obj[item] = true;
    res += item;
  }
}
console.log(res);

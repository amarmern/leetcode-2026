//"leetcode" → "l"
let str = 'swiss';
let map = {};
for (let item of str) {
  map[item] = (map[item] || 0) + 1;
}

for (let item of str) {
  if (map[item] === 1) {
    console.log(item);
    return;
  }
}

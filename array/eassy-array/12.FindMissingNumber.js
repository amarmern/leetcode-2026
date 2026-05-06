//Example: [1,2,4,5] → 3
let arr = [1, 2, 4, 5];
let length = Math.max.apply(this, arr);
let missing = [];
for (let i = 1; i < length; i++) {
  if (arr.indexOf(i) < 0) {
    missing.push(i);
  }
}
console.log(missing);

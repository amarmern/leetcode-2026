//Example: [1, 5, 3] → 5
let arr = [1, 5, 3];
let max = 0;
for (let item of arr) {
  if (item > max) {
    max = item;
  }
}

console.log(max);

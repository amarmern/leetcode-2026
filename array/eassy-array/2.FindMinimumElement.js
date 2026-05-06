//Example: [2, 4, 1] → 1
let arr = [2, 4, 1];
let min = arr[0];
for (let item of arr) {
  if (item < min) {
    min = item;
  }
}
//let res = Math.min(...arr);
console.log(min);

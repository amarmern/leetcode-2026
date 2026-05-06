//Example: [2,4,6] → 4
let arr = [2, 4, 6];
let arrayLength = arr.length;
let sum = 0;
for (let item of arr) {
  sum += item;
}
let avg = sum / arrayLength;
console.log(avg);

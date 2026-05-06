//Problem: Return second largest value
//Example: [10,20,5] → 10
let arr = [10, 20, 5];
// let first = 0;
// let second = 0;
// for (let item of arr) {
//   if (item > first) {
//     second = first;
//     first = item;
//   }
// }
// console.log(second);

//second  way
let firstLargest = 0;
let secondLargest = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > firstLargest) {
    secondLargest = firstLargest;
    firstLargest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
    secondLargest = arr[i];
  }
}
console.log(secondLargest);

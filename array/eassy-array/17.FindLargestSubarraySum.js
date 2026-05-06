/*
Find Largest Subarray Sum (Basic Kadane Intro)
Problem: Max sum of contiguous subarray
Example: [-1,2,3] → 5
*/

let arr = [-1, 2, 3];
let res = arr[0];
let maxEnding = arr[0];

for (let i = 0; i < arr.length; i++) {
  maxEnding = Math.max(maxEnding + arr[i], arr[i]);
  res = Math.max(res, maxEnding);
}
console.log(res);

/*
Problem: Remove duplicates in-place
Example: [1,1,2] → [1,2]
*/
let arr = [1, 1, 2];
let b = [];
for (let i = 0; i < arr.length; i++) {
  if (b.indexOf(arr[i]) == -1) {
    b.push(arr[i]);
  }
}
console.log(b);

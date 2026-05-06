//[1,2,3] → 6
//Approach 1: Using loop (most common in interviews)
let arr = [1, 2, 3];
let sum = 0;

for (let item of arr) {
  sum += item;
}
console.log(sum);

//Approach 2: Using reduce (clean & modern JS)
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3])); // 6

//Approach 3: Recursion (good for concept clarity)
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

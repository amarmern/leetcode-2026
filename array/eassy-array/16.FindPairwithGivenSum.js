//Example: [1,2,3], sum=5 → true (2+3)

let arr = [1, 2, 3];
let sum = 5;

console.log(twoSum(arr, sum));

function twoSum(arr, sum) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let firstEle = arr[i];
    let seconEle = sum - firstEle;
    if (map[seconEle] !== undefined) {
      return [map[seconEle], firstEle];
    } else {
      map[firstEle] = arr[i];
    }
  }
}

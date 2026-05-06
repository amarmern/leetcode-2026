/*
Problem: Element greater than all right elements
Example: [16,17,4,3,5,2] → [17,5,2]
*/

function findLeaders(arr) {
  let result = [];
  let maxRight = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= maxRight) {
      result.push(arr[i]);
      maxRight = arr[i];
    }
  }
  // reverse to maintain original order
  return result.reverse();
}

console.log(findLeaders([16, 17, 4, 3, 5, 2]));
// [17,5,2]

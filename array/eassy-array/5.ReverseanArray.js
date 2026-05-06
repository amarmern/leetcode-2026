//[1,2,3] → [3,2,1]
let arr = [1, 2, 3];

// let reverse = arr.slice().reverse();
// console.log(reverse);
/*
Approach: Two Pointers
Start one pointer at beginning (left)
One at end (right)
Swap elements
Move inward
*/

console.log(reverseArray([1, 2, 3])); // [3,2,1]
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

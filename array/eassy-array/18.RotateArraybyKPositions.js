//Example: [1,2,3,4], k=2 → [3,4,1,2]
let arr = [1, 2, 3, 4];
let k = 2;
console.log(rotateArray(arr, k));
function rotateArray(arr, k) {
  let n = arr.length;
  if (n == 0) return;
  k = k % n;
  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - 1);
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr;
}

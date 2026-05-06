/*
For array:
[1, 2, 3, 4]

Prefix sum array becomes:
[1, 3, 6, 10]

*/

function prefixInPlace(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  return arr;
}

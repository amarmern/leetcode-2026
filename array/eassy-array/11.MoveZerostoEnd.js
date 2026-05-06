//Example: [0,1,0,3] → [1,3,0,0]
let arr = [0, 1, 0, 3];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    [arr[i], arr[count]] = [arr[count], arr[i]];
    count++;
  }
}

console.log(arr);

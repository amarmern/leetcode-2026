//Example: [1,3,4,2,2] → 2
let arr = [1, 3, 4, 2, 2, 2];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) !== i && duplicates.indexOf(arr[i]) == -1) {
    duplicates.push(arr[i]);
  }
}

console.log(duplicates);

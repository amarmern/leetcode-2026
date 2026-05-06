function intersectionWithDuplicates(arr1, arr2) {
  let map = {};
  let result = [];

  for (let num of arr1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }

  return result;
}

console.log(intersectionWithDuplicates([1, 2, 2, 3], [2, 2, 4]));
// [2,2]

//Approach 2: Using filter
function intersection(arr1, arr2) {
  return [...new Set(arr1.filter((num) => arr2.includes(num)))];
}

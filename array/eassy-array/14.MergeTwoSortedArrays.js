function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;
  for (; i < arr1.length && j < arr2.length; ) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // remaining elements from arr1
  for (; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  // remaining elements from arr2
  for (; j < arr2.length; j++) {
    result.push(arr2[j]);
  }
  return result;
}
console.log(mergeSortedArrays([1, 3], [2, 4]));
// [1,2,3,4]

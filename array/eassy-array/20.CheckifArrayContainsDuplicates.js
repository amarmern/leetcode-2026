function containsDuplicate(arr) {
  let map = {};
  for (let num of arr) {
    if (map[num]) {
      return true;
    }
    map[num] = 1;
  }
  return false;
}

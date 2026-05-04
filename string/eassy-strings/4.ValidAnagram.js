//"listen" & "silent" → true
let str1 = 'listen';
let str2 = 'silent';
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let item of str1) {
    obj[item] = (obj[item] || 0) + 1;
  }

  for (let item of str2) {
    // here i stuck
    if (!obj[item]) {
      return false;
    }
    obj[item]--;
  }
  return true;
}

console.log(validAnagram(str1, str2));

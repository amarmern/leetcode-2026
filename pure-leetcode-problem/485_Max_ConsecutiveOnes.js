/*
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
 The maximum number of consecutive 1s is 3.
*/

let nums = [1, 1, 0, 1, 1, 1];
function findMaxConsecutiveOnes(nums) {
  let maxOnes = 0;
  let currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      maxOnes = Math.max(maxOnes, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxOnes;
}

console.log(findMaxConsecutiveOnes(nums));

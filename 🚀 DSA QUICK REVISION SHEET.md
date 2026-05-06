🔹 1. Sliding Window

When to use:

Subarray / substring problems
“Longest / shortest / count” with conditions

Common Problems:

Longest substring without repeating chars
Minimum window substring
Max sum subarray of size k

Template:

let left = 0;
for (let right = 0; right < n; right++) {
// expand window

while (condition breaks) {
// shrink window
left++;
}

// update result
}

Key Tip:
👉 Use when contiguous range is involved

🔹 2. Two Pointers

When to use:

Sorted arrays
Pair problems

Common Problems:

Two Sum (sorted)
Container with most water
Remove duplicates

Template:

let left = 0, right = n - 1;
while (left < right) {
if (condition) left++;
else right--;
}

Key Tip:
👉 Opposite direction traversal

🔹 3. Hashing (Map / Set)

When to use:

Frequency counting
Fast lookup

Common Problems:

Two Sum
First non-repeating char
Anagram check

Template:

let map = new Map();

for (let num of arr) {
map.set(num, (map.get(num) || 0) + 1);
}

Key Tip:
👉 Converts O(n²) → O(n)

🔹 4. Prefix Sum

When to use:

Subarray sum problems
Range queries

Common Problems:

Subarray sum = k
Longest subarray with sum k

Template:

let sum = 0;
let map = new Map();
map.set(0, 1);

for (let num of arr) {
sum += num;

if (map.has(sum - k)) {
count += map.get(sum - k);
}

map.set(sum, (map.get(sum) || 0) + 1);
}

Key Tip:
👉 Handles negative numbers too

🔹 5. Kadane’s Algorithm

When to use:

Maximum subarray sum

Template:

let maxSum = arr[0];
let curr = arr[0];

for (let i = 1; i < arr.length; i++) {
curr = Math.max(arr[i], curr + arr[i]);
maxSum = Math.max(maxSum, curr);
}

Key Tip:
👉 Greedy + DP combo

🔹 6. Sorting + Greedy

When to use:

Intervals / scheduling

Common Problems:

Merge intervals
Activity selection
Non-overlapping intervals

Key Tip:
👉 Sort first, then solve

🔹 7. In-place Array Manipulation

When to use:

Constant space required

Common Problems:

Rotate array
Set matrix zeroes
Next permutation

Key Tip:
👉 Avoid extra space

🔹 8. Stack (for Strings / Arrays)

When to use:

Matching / reversal

Common Problems:

Valid parentheses
Next greater element

Template:

let stack = [];
for (let ch of str) {
// push / pop logic
}
🔹 9. Binary Search (on Answer)

When to use:

Sorted arrays OR search space

Common Problems:

Search in rotated array
Find peak element

Template:

let left = 0, right = n - 1;
while (left <= right) {
let mid = Math.floor((left + right) / 2);
// condition
}
🔹 10. Matrix Traversal

When to use:

2D arrays

Common Problems:

Spiral traversal
Rotate matrix

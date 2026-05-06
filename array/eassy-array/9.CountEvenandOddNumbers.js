//Example: [1,2,3] → even=1, odd=2

function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even, odd };
}

console.log(countEvenOdd([1, 2, 3]));

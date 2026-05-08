const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let res = arr.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {});

console.log(res);

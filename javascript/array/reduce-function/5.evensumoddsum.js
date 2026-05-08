const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let res = arr.reduce(
  (acc, item) => {
    if (item % 2 === 0) {
      acc.evensum += item;
    } else {
      acc.oddsum += item;
    }
    return acc;
  },
  { evensum: 0, oddsum: 0 },
);
console.log(res);

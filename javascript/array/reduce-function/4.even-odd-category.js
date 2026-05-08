const arr = [1, 2, 3, 4, 5, 6];
/*{
  even: [2,4,6],
  odd: [1,3,5]
}
*/

let res = arr.reduce(
  (acc, item) => {
    if (item % 2 === 0) {
      acc.even.push(item);
    } else {
      acc.odd.push(item);
    }
    return acc;
  },
  { even: [], odd: [] },
);

console.log(res);

const orders = [
  { user: 'A', amount: 100 },
  { user: 'B', amount: 200 },
  { user: 'A', amount: 300 },
  { user: 'B', amount: 100 },
];
// in this question user becomes key
let result = orders.reduce((acc, item) => {
  acc[item.user] = (acc[item.user] || 0) + item.amount;
  return acc;
}, {});

console.log(result);
//another way
// let obj = {};
// for (let item of orders) {
//   //user become key
//   obj[item.user] = (obj[item.user] || 0) + item.amount;
// }

// console.log(obj);

const orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
];
/*
[
  { id: 1, amount: 100, tax: 10 },
  { id: 2, amount: 200, tax: 20 }
]
*/
const result = orders.map((item) => {
  return {
    ...item,
    tax: item.amount * 0.1,
  };
});

console.log(result);
const users = [
  { name: 'A', salary: 1000 },
  { name: 'B', salary: 2000 },
];

const userBonus = users.map((item) => {
  return {
    ...item,
    bonus: item.salary * 0.5,
  };
});
console.log(userBonus);

/*
[
  { name: 'A', salary: 1000, bonus: 500 },
  { name: 'B', salary: 2000, bonus: 1000 },
];
*/

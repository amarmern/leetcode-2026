const users = [
  { name: 'A', age: 20 },
  { name: 'B', age: 25 },
  { name: 'C', age: 20 },
  { name: 'D', age: 25 },
  { name: 'E', age: 30 },
];

const result = users.reduce((acc, item) => {
  let key = item.age;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);

  return acc;
}, {});

console.log(result);

/*
{
  20: [
    { name: "A", age: 20 },
    { name: "C", age: 20 }
  ],

  25: [
    { name: "B", age: 25 },
    { name: "D", age: 25 }
  ],

  30: [
    { name: "E", age: 30 }
  ]
}
*/

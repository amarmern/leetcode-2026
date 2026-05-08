const users = [
  { name: 'A', active: true },
  { name: 'B', active: false },
  { name: 'C', active: true },
];

const result = users.filter((item) => item.active).map((item) => item.name);

console.log(result);
/*
["A", "C"]
*/

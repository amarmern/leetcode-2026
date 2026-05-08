const employees = [
  { name: 'A', salary: 3000 },
  { name: 'B', salary: 7000 },
  { name: 'C', salary: 5000 },
];

let res = employees.reduce((max, item) => {
  if (item.salary > max.salary) {
    return item;
  }
  return max;
});

console.log(res);
//{ name: "B", salary: 7000 }

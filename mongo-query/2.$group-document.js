//2. $group → Group Data
//Calculate total salary by department.
/*
[
  { _id: "Sales", totalAmount: 2500 },
  { _id: "Accounting", totalAmount: 1500 }
]
  */
db.employees.aggregate([
  { $group: { _id: '$dept', totalSum: { $sum: '$amount' } } },
]);

//SELECT dept, SUM(amount)
//FROM employees
//GROUP BY dept;

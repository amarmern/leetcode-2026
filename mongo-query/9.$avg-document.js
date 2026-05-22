//9. $avg → Average
//Find average salary.

db.employees.aggregate([
  {
    $group: {
      _id: null,
      avgSalary: { $avg: '$amount' },
    },
  },
]);
/*
[
  {
    avgSalary: 1333.33
  }
]
  */
//SELECT AVG(amount) FROM employees;

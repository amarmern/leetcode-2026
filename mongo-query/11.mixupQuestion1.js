/*
Question

Find department-wise:
total employees
average salary
highest salary
*/

db.employees.aggregate([
  {
    $group: {
      _id: '$dept',
      totalEmployee: { $sum: 1 },
      averageSalary: { $avg: '$amount' },
      heighestSalary: { $max: '$amount' },
    },
  },
]);

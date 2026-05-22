//8. $sum → Sum Values
//Find total company expense.

db.employees.aggregate([
  {
    $group: {
      _id: null,
      totalExpense: { $sum: '$amount' },
    },
  },
]);

//SELECT SUM(amount) FROM employees;

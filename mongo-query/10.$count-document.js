//10. $count → Count Documents
//Count total employees in Sales department.

db.employees.aggregate([
  {
    $match: {
      dept: 'Sales',
    },
  },
  {
    $count: 'totalSalesEmployees',
  },
]);
/*[
  {
    totalSalesEmployees: 2
  }
]*/

/*
SELECT COUNT(*)
FROM employees
WHERE dept='Sales';

*/

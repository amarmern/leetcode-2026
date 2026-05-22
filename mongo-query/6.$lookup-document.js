//6.$lookup → Join Collections

db.employees.aggregate([
  {
    $lookup: {
      from: 'departments',
      localField: 'dept',
      foreignField: 'dept_name',
      as: 'departmentDetails',
    },
  },
]);

/*
SELECT *
FROM employees e
JOIN departments d
ON e.dept = d.dept_name;

*/

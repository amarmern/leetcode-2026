//1. $match → Filter Documents
//Find all employees from Sales department.
/*
[
  {
    name: "Clark",
    dept: "Sales"
  },
  {
    name: "Ava",
    dept: "Sales"
  }
]*/

db.employees.aggregate([{ $match: { dept: 'Sales' } }]);

// sql
//SELECT * FROM employees WHERE dept='Sales';

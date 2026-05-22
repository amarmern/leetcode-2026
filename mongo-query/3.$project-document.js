//3. $project → Select Fields
//Show only employee name and department.

/*
[
  { name: "Clark", dept: "Sales" },
  { name: "Dave", dept: "Accounting" }
]
  */

db.employee.aggregate([{ $project: { _id: 0, name: 1, dept: 1 } }]);
//SELECT name, dept FROM employees;

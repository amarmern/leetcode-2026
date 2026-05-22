//5. $limit → Limit Records
//Get top 2 highest-paid employees.

db.employees.aggregate([
  { $sort: { amount: -1 } },
  { $limit: 2 },
  { $project: { _id: 0, name: 1, dept: 1, skills: 1, amount: 1 } },
]);

/*SELECT * FROM employees
ORDER BY amount DESC
LIMIT 2;

*/

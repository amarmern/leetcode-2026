//Get top 1 highest-paid employee from Sales department.

db.employees.aggregate([
  { $match: { dept: 'Sales' } },
  { $sort: { amount: -1 } },
  { $limit: 1 },
  {
    $project: {
      _id: 0,
      name: 1,
      amount: 1,
    },
  },
]);

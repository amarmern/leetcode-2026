/*db.employees.find().sort({
  amount: -1
}).limit(1)

*/

db.employees.aggregate([{ $sort: { amount: -1 } }, { $limit: 1 }]);

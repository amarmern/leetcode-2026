//7. $unwind → Split Array
//Convert skills array into separate documents.

db.employees.aggregate([
  {
    $unwind: '$skills',
  },
]);

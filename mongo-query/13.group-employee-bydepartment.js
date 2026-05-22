db.employees.aggregate([
  {
    $group: {
      _id: '$dept',
      employees: {
        $push: '$name',
      },
    },
  },
]);

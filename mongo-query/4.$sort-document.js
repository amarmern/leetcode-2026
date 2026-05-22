//4. $sort → Sort Data
//Sort employees by amount descending.

db.employees.aggregate([{ $sort: { amout: -1 } }]);
//SELECT * FROM employees ORDER BY amount DESC;

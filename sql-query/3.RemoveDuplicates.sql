//3. Remove Duplicates

DELETE from employee
WHERE id NOT IN(select min(id)
FROM employee
GROUP BY email)

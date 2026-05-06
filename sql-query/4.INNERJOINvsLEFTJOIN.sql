--Inner Join
/* Key difference:
INNER → only matching rows
LEFT → all employees + matching departments
*/

SELECT e.name , d.department
FROM employee e
INNER JOIN  department d
on e.depid = d.deptid

--LEFT JOIN
SELECT  e.name , d.department
FROM employee e 
LEFT JOIN department d 
on e.depid = d.id 

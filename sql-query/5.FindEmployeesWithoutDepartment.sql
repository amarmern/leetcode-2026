SELECT e.name , 
FROM employee e 
LEFT JOIN department d 
ON e.deptid = d.depid
where d.depid = null
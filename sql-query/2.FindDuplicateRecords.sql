SELECT email, count(*)
FROM employee 
GROUP BY email
HAVING count(*) > 1
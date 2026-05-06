SELECT name,
CASE 
  WHEN salary > 50000 THEN 'High'
  WHEN salary BETWEEN 30000 AND 50000 THEN 'Medium'
  ELSE 'Low'
END AS salary_category
FROM employees;
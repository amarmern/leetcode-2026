-- WHERE (before grouping)
SELECT * FROM employees WHERE salary > 50000;

-- HAVING (after grouping)
SELECT dept_id, COUNT(*)
FROM employees
GROUP BY dept_id
HAVING COUNT(*) > 5;
6. Get Highest Salary per Department
select max(salary) as maxSalary
from employee
group by dept_id
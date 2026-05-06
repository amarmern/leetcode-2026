//Find 2nd Highest Salary

select max(salary)  from employee
 where salary < select max(salary) from employee

 //or

 select salary from employee
 order by salary desc
 LIMIT 1 OFFSET 1
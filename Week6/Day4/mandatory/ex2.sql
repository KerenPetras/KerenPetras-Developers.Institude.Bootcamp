-- Restricting And Sorting
-- Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
SELECT first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 10000 AND 15000;

-- Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
SELECT first_name, last_name, hire_date
FROM employees
WHERE hire_date BETWEEN '1987-01-01' AND '1987-12-31';

-- Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
SELECT *
FROM employees
WHERE first_name LIKE '%c%' AND first_name LIKE '%e%';

-- Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
SELECT last_name, job, salary
FROM employees
WHERE job NOT IN ('Programmer', 'Shipping Clerk')
AND salary NOT IN (4500, 10000, 15000);

-- Write a query to display the last names of all employees whose last name contains exactly six characters.
SELECT last_name
FROM employees
WHERE LENGTH(last_name) = 6;

-- Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
SELECT last_name
FROM employees
WHERE SUBSTRING(last_name, 3, 1) = 'e';

-- Write a query to display the jobs title appearing in the employees table.
SELECT DISTINCT job
FROM employees;

-- Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
SELECT *
FROM employees
WHERE last_name IN ('JONES', 'BLAKE', 'SCOTT', 'KING', 'FORD');
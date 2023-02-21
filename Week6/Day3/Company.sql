CREATE SEQUENCE INCREMENTD1
INCREMENT 10
START 10;

CREATE TABLE EMPLOYEE(
     EmpCode      INTEGER PRIMARY KEY,
     EmpFName     VARCHAR(15) NOT NULL,
     EmpLName     VARCHAR(15) NOT NULL,
     Job          VARCHAR(45),
     Manager      CHAR(4),
     HireDate     DATE,
     Salary       DECIMAL DEFAULT 0,
     Commission   INTEGER,
     Department_code INTEGER REFERENCES DEPARTMENT (DEPTCODE)
  );
  
  
CREATE TABLE DEPARTMENT (
  DEPTCODE INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('INCREMENTD1'),
  DeptName CHAR(30),
  LOCATION VARCHAR(33) UNIQUE
);

SELECT * FROM DEPARTMENT

INSERT INTO DEPARTMENT (DeptName,LOCATION) VALUES ('FINANCE', 'EDINBURGH'), ('SOFTWARE','PADDINGTON'), ('SALES', 'MAIDSTONE'), ('MARKETING', 'DARLINGTON'), ('ADMIN', 'BIRMINGHAM');

INSERT INTO EMPLOYEE (EmpCode,EmpFName,EmpLName,Job,Manager,HireDate,Salary,Commission,Department_code) VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20), (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),
(9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20), (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30), (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10), (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20), (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10), (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30), (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20), (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20), (9902, 'ANDREW', 'FAULKNER', 'ANALYST', 7566, '1981-12-03', 3000,0, 10), (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20), (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30), (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30), (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL), (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50), (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);

-- How many employees are in dept 10.
-- How many employees are analyst in dept 10.
-- Display the names of each employees, their job and dept location
-- Create a query that displays EMPFNAME, EMPLNAME, Department_code, DEPTNAME, LOCATION from EMPLOYEE, and DEPARTMENT tables. Make sure the results are in the ascending order based on the EMPFNAME and LOCATION of the department.
-- Display EMPFNAME and "TOTAL SALARY" for each employee (commission and salary)
-- Display MAX SALARY from the EMPLOYEE table.
-- Find the avg salary of the software engineers
-- Bonus: Which join should we use to display the employee 9777 even if he has no deptcode?


-- 21/02/2023
-- 1. Create a Boss table with the columns boss_id, boss_name, boss_type (ie.nice, angry, funny ect...), -- and dept_number:-- The boss table,has a one to one relationship with the department table:-- => a department can be managed by only 1 boss, and a boss can manage only 1 department
CREATE TABLE Boss (
	boss_id INTEGER PRIMARY KEY,
	boss_name varchar(30) NOT NULL,
	boss_type varchar(30) NOT NULL,
	dept_number INTEGER REFERENCES DEPARTMENT,
)

-- 2. Add a few bosses : one for the finance dept, one for sales and one for marketing--
-- 3. What is the type and name of the boss of the dept Finance (show the dept name, not the dept id)
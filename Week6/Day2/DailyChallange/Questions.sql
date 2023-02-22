-- Instructions
-- In this puzzle you have to go through all the SQL queries and provide us the output of the requests before executing them (ie. make an assumption).
-- Then, execute them to make sure you were correct.
--1
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

--  id | name   
-- ----+--------
--   5 | Pawan  
--   6 | Sharlee
--   7 | Krish  
--     | Avtaar 

--  id 
-- ----
--   5
-- NULL
-- (2 rows)

-- Q1. What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- Output before execution:
-- Since we have previously inserted data into both tables, the output should be a single integer representing the count of rows in "FirstTab" where the "id" value is not NULL and is not present in the "id" column of "SecondTab" where the "id" value is NULL.

-- Q2. What will be the OUTPUT of the following statement?
--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- This query counts the number of rows in "FirstTab" where the "id" value is not present in the "id" column of "SecondTab" where the "id" value is 5.

-- Q3. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
-- --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- This query counts the number of rows in "FirstTab" where the "id" value is not present in the "id" column of "SecondTab".

-- Q4. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- This query counts the number of rows in "FirstTab" where the "id" value is not present in the "id" column of "SecondTab" where the "id" value is not NULL.
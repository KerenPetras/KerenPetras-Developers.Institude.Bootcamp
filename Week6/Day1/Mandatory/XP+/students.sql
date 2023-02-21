-- CREATE TABLE students(
-- id_student SERIAL PRIMARY KEY,
-- last_name varchar (20) NOT NULL,
-- 	first_name varchar (20) NOT NULL,
-- 	birth_date DATE NOT NULL)

--most efficent way
-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES 
--   ('Marc', 'Benichou', '1998-11-02'), 
--   ('Yoan', 'Cohen', '2010-12-03'), 
--   ('Lea', 'Benichou', '1987-07-27'), 
--   ('Amelia', 'Dux', '1996-04-07'), 
--   ('David', 'Grez', '2003-06-14'), 
--   ('Omer', 'Simpson', '1980-10-03');

-- 1 fetch all
-- SELECT * FROM students;

-- 2
-- SELECT first_name, last_name FROM students;

--3.1
-- SELECT first_name,last_name FROM students WHERE id_student = '2';

--3.2
-- SELECT first_name,last_name FROM students WHERE last_name ILIKE 'Benichou%' AND first_name ILIKE 'Marc%';

--3.3
-- SELECT first_name,last_name FROM students WHERE last_name ILIKE 'Benichou%' OR first_name ILIKE 'Marc%';

--3.4
-- SELECT first_name,last_name FROM students WHERE first_name ILIKE '%a%';

--3.5
-- SELECT first_name,last_name FROM students WHERE first_name ILIKE 'a%';

--3.6
-- SELECT first_name,last_name FROM students WHERE first_name ILIKE '%a';

--3.7
-- SELECT first_name,last_name FROM students WHERE first_name ILIKE '_%a_';

--3.8
-- SELECT first_name,last_name FROM students WHERE id_student IN (1,3);
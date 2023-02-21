-- CREATE TABLE actors(
--     actor_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL, 
--     last_name VARCHAR (25) NOT NULL, 
--     date_birth DATE NOT NULL,
--     number_oscars SMALLINT DEFAULT 0
-- )

-- select all columns from the table
-- SELECT * FROM actors;

-- SELECT first_name, last_name FROM actors;

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('George', 'Clooney', '1999-01-08', 2);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Matt', 'Damon', '1987-01-22', '3');

-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('Jenifer', 'Aniston', '1987-01-22');

-- --condition
-- SELECT * FROM actors WHERE number_oscars >= 2;

-- -- select all the columns where nb > 2 and last name start with the D case INSENSITIVE
-- SELECT * FROM actors WHERE number_oscars >= 2 AND last_name ILIKE 'd%';

-- -- select only the actors that are born in 1987
-- SELECT * FROM actors WHERE EXTRACT(YEAR from date_birth) = 1987;

-- SELECT first_name, last_name, EXTRACT(YEAR from age(date_birth)) FROM actors;

-- SELECT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars ASC;

-- SELECT * FROM actors LIMIT 2;

-- -- the actor that has the maximum number of oscars
-- SELECT first_name, last_name, number_oscars FROM actors ORDER BY number_oscars DESC LIMIT 1;

--1 
-- in the table there are 3 actors

--2 // defualt 0 on oscars
-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('Chris', 'Hemsworth', '1983-08-11');

-- tried to exactue witout date birth error: ERROR:  INSERT has more target columns than expressions
-- LINE 49: INSERT INTO actors (first_name, last_name, date_birth)                                     ^
-- SQL state: 42601
-- -- Character: 1655
-- becaduse its not null so you cannot leave it blank
-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('Chris', 'Pratt');

-- Succsed to execute without first name
-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('', 'Pratt', '1979-07-21');

-- SELECT * FROM actors;

-- Succsed to execute without last name
-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Johnny', '' , '1963-06-09', '3');

-- SELECT * FROM actors;

-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('Will', 'Smith', '');

--ERROR:  invalid input syntax for type date: ""
-- LINE 69: VALUES ('Will', 'Smith', '');
--                                   ^



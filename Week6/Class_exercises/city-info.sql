-- CREATE TABLE city_info (
-- event_datetime timestamp NOT NULL, 
-- city VARCHAR(50) NOT NULL, 
-- temperature decimal NOT NULL, 
-- light decimal NOT NULL, 
-- airquality_raw decimal NOT NULL, 
-- sound decimal NOT NULL, 
-- humidity decimal NOT NULL, 
-- dust decimal NOT NULL
-- )

-- 3. Import the csv file into the table
--> See the lesson here ABOUT IMPORT AND EXPORT: http://learn.di-learning.com/courses/collection/6/course/138/section/337/chapter/404
--> If you have trouble importing the CSV file, look at the documentation here : https://www.postgresqltutorial.com/import-csv-file-into-posgresql-table/
--> Look at : Import CSV file into a table using pgAdmin

-- If you receive an error of binary path, do this: find the binary path => Go to your computer -> C: (on windows) -> Program Files -> PostgreSQL -> your version -> bin. It should be something like this : C:\Program Files\PostgreSQL\9.6\bin. And this is what you need to copy and paste to pgAdmin. 2. In pgAdmin select File -> Preferences and look for Path and then click on Binary Path and it needs your path where it says PostgreSQL Binary Path

-- QUESTIONS

-- 1. Select everything from the table. (every row and columns) - How many records does the table have?
-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?
-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
-- 10. Add to the table, todays information in Israel - of this very hour. (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) -- - Use the returning statement to see what you just inserted:
-- https://www.postgresqltutorial.com/postgresql-insert/


-- CREATE TABLE items(
-- serial_numitem SERIAL PRIMARY KEY,
-- item_name varchar(50)NOT NULL,
-- item_price smallint NOT NULL)

-- CREATE TABLE customers(
-- serial_customer SERIAL PRIMARY KEY,
-- first_name varchar(50) NOT NULL,
-- last_name varchar(50) NOT NULL)

-- INSERT INTO items (item_name,item_price)
-- VALUES ('Small Desk', 100);

-- INSERT INTO items (item_name, item_price)
-- VALUES ('Large desk', 300);

-- INSERT INTO items (item_name, item_price)
-- VALUES ('Fan', 80);

-- Exercise 3 - ALL ITEMS
-- SELECT * FROM items;

-- ALL ITEMS WITH 80+ ITEMS
-- SELECT * FROM items WHERE item_price > 80;

--ALL ITEMS WITH BELOW AND INCLUDE 300
-- SELECT * FROM items WHERE item_price <= 300;

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Greg','Jones');

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Sandra','Jones');

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Scott','Scott');

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Trevor','Green');

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Melanie','Johnson');


-- using sql in the customers table
-- SELECT * FROM customers;

-- -- smith was not found
-- SELECT * FROM customers WHERE last_name ILIKE 'smith%';

-- -- JONES 
-- SELECT * FROM  customers WHERE last_name ILIKE 'Jones%';

-- IS NOT SCOTT
-- SELECT * FROM customers WHERE first_name NOT ILIKE 'scott%';
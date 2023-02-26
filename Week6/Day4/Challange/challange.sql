-- Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.
CREATE TABLE user_order (
    order_id SERIAL PRIMARY KEY,
    date_order DATE DEFAULT NOW()
);

CREATE TABLE item (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(50),
    price DECIMAL
);

CREATE TABLE orders_item (
    order_id INTEGER REFERENCES user_order (order_id) ON DELETE CASCADE ON UPDATE CASCADE,
    item_id INTEGER UNIQUE REFERENCES item (item_id) ON DELETE CASCADE ON UPDATE CASCADE,
    qty_item INTEGER,
    PRIMARY KEY (order_id, item_id)
);

INSERT INTO item (item_name, price)
VALUES ('phone', 300), ('scooter', 2000), ('headphones', 100);

INSERT INTO user_order (date_order)
VALUES ('2023-01-23'), (DEFAULT), ('2023-03-23');

INSERT INTO orders_item (order_id, item_id, qty_item) 
VALUES ((SELECT order_id FROM user_order WHERE date_order='2023-01-23'), 
        (SELECT item_id FROM item WHERE item_name='scooter'), 2),
        ((SELECT order_id FROM user_order WHERE date_order='2023-01-23'), 
        (SELECT item_id FROM item WHERE item_name='phone'), 4),
        ((SELECT order_id FROM user_order WHERE date_order='2023-03-23'), 
        (SELECT item_id FROM item WHERE item_name='headphones'), 6);

-- Create a function that returns the total price for a given order.
CREATE or REPLACE FUNCTION totalPrice (user_order_id INTEGER) 
RETURNS INTEGER AS 
$$
DECLARE
    total INTEGER;
BEGIN
      SELECT SUM(price*qty_item) INTO total
      FROM orders_item
      INNER JOIN item ON orders_item.item_id=item.item_id
      WHERE order_id=user_order_id;
      RETURN total;
END;
$$ 
LANGUAGE plpgsql;
SELECT totalPrice(1);

-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.



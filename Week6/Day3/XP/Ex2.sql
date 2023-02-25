-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * FROM film;
SELECT * FROM language;
UPDATE film SET language_id = '2' WHERE film.title ILIKE 'chamber italian'; --changed from id 1 to id 2
SELECT title,language_id FROM film WHERE title ILIKE 'chamber italian';

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--- I think the foreign keys that are defined are customer_id,

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
--- DONE the table got deleted

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT * FROM rental;
SELECT * FROM payment;
SELECT return_date,customer_id,return_date FROM rental WHERE return_date IS NULL;
SELECT COUNT(*) FROM rental WHERE return_date IS NULL; --There are 183 movies that havent return yet to the store.

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.title, payment.amount
FROM rental
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER JOIN film ON inventory.film_id = film.film_id
INNER JOIN payment ON rental.rental_id = payment.rental_id
WHERE rental.return_date IS NULL
ORDER BY payment.amount DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo wrestler%' 
  AND actor.first_name = 'Penelope' 
  AND actor.last_name = 'Monroe';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title,description, rating
FROM film
WHERE length < 60
AND rating = 'R';
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name ILIKE 'Matthew' AND customer.last_name ILIKE 'Mahan' 
  AND payment.amount > 4.00
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT title, rental_rate, replacement_cost,description
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE (title ILIKE '%boat%' OR description ILIKE '%boat%')
  AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan';
---results because it was probably an expensive movie it was "stone fire"
-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all film languages.
SELECT * FROM language; 

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.

SELECT film.film_title,film.description,language.language_name
FROM film 
INNER JOIN language
ON film.language_id = language.language_id; 

SELECT film.title,film.description,language.name
FROM film 
LEFT OUTER JOIN language
ON film.language_id = language.language_id; 

-- Movies that also includes movies with different laguages
SELECT film.title,film.description,language.name
FROM film 
RIGHT OUTER JOIN language
ON film.language_id = language.language_id; 

-- Other way
SELECT film.title,film.description,language.name
FROM film 
FULL OUTER  JOIN language
ON film.language_id = language.language_id; 

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
id integer,
name varchar(50)NOT NULL
)

INSERT INTO new_film(id,name)
VALUES ('1050', 'I am Legend'),
('1051', 'Hitch'),
('1052', 'Avatar')
RETURNING *;

ALTER TABLE new_film ADD CONSTRAINT unique_id UNIQUE (id);

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY NOT NULL,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id) ON DELETE CASCADE,
    title VARCHAR(50),
    score INTEGER,
    review_text TEXT,
    last_update DATE
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (1050, 1, 'Great movie!', 9, 'I really enjoyed this movie. The acting was great and the storyline was engaging.', '2023-02-22'),
       (1052, 2, 'Disappointing', 5, 'I had high expectations for this movie, but I was disappointed. The special effects were impressive, but the storyline was weak.', '2023-02-22');


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1050;
SELECT * FROM new_film;

-- output the whole row got deleted.
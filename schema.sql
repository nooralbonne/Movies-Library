CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    director VARCHAR(100),
    release_year INTEGER,
    genre VARCHAR(50),
    comments VARCHAR(255)
);

-- ALTER TABLE movies
-- ADD COLUMN id SERIAL PRIMARY KEY;
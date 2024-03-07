CREATE DATABASE perntodo;

/* Check existence...
\c perntodo;
\dt
 */
CREATE TABLE
    todo (
        todo_id SERIAL PRIMARY KEY,
        description VARCHAR(255)
    );
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

CREATE TABLE
    completedtodo (
        completed_id INTEGER REFERENCES todo (todo_id),
        description VARCHAR(255)
    );

INSERT INTO
    completedtodo
SELECT
    todo_id,
    description
from
    todo
WHERE
    todo_id = 2;

/*Useful Postgres for testing*/
delete from only completedtodo;

select
    *
from
    completedtodo;
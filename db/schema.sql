DROP TABLE IF EXISTS users

CREATE TABLE users
(
  id serial primary key,
  username varchar, 
  authid varchar
);
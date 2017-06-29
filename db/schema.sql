DROP TABLE IF EXISTS users

CREATE TABLE users
(
  id serial primary key,
  username varchar, 
  authid varchar
);


CREATE TABLE favorites 
(
  users_authid varchar,
  favorite varchar
);

CREATE TABLE options 
(
  id serial primary key,
  option varchar
);

insert into options(option) values('Cake'), ('CheeseCake'), ('Pie'), ('Ice Cream')

-- insert into favorites(users_authid, favorite) values('google-oauth2|110302264893432868050', 'Cake')


-- select * 
-- from users
-- JOIN favorites on users.authid = favorites.users_authid
-- where authid = 'google-oauth2|110302264893432868050';




select users.username, favorites.users_authid, favorites.favorite
from users
JOIN favorites on users.authid = favorites.users_authid
where authid = 'google-oauth2|110302264893432868050';
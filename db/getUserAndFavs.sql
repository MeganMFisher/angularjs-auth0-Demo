select favorites.favorite
from users
join favorites on users.authid = favorites.users_authid
where authid = $1;

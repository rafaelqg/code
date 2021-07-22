show index from sakila.actor;
CREATE INDEX actor_name ON sakila.actor (first_name, last_name);
DROP INDEX actor_name ON sakila.actor;
SELECT * FROM sakila.actor;
Explain SELECT * FROM sakila.actor where first_name='Chris' and last_name='Redfield';

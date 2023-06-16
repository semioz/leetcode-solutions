--Write an SQL query to fix the names so that only the first character is uppercase and the rest are lowercase.
--Return the result table ordered by user_id.
SELECT user_id, CONCAT(UPPER(LEFT,name),LOWER(name,LENGTH(name)-1)) AS name
FROM users
ORDER BY user_id;

##Exercise 1 — Tasks
- Find the title of each film 
  ```sql
  SELECT title FROM movies;
  ```
- Find the director of each film
- ```
  SELECT director FROM movies;
  ```
- Find the title and director of each film
- ```
  SELECT title,director FROM movies;
```
- Find the title and year of each film
```
  SELECT title,year FROM movies;
```
- Find all the information about each film
```
  SELECT * FROM movies;

```  

![alt text](<Screenshot from 2026-02-25 16-14-26.png>)





##Exercise 2 — Tasks
    -Find the movie with a row id of 6 ✓
    ```
    SELECT * 
    FROM movies 
    where id=6;
    ```
    -Find the movies released in the years between 2000 and 2010
    ```
    SELECT * 
    FROM movies 
    where year 
    BETWEEN 2000 and 2010;
    ```
    -Find the movies not released in the years between 2000 and 2010
    ```
    SELECT * 
    FROM movies 
    where year 
    NOT BETWEEN 2000 and 2010; 
    ```
    -Find the first 5 Pixar movies and their release year
    ```
    SELECT * 
    FROM movies 
    where id 
    between 1 and 5;
    ```
    ![alt text](<Screenshot from 2026-02-25 16-48-37.png>)



##Exercise 3 — Tasks
-Find all the Toy Story movies ✓
```
SELECT * 
FROM movies
where title
like "Toy Story%";
```
-Find all the movies directed by John Lasseter
```
SELECT * 
FROM movies
where director
like "John Lasseter";
```
-Find all the movies (and director) not directed by John Lasseter
```
SELECT * 
FROM movies
where director
not like  "John Lasseter";
```
-Find all the WALL-* movies
```
SELECT * 
FROM movies
where Title
like  "WALL-_";
```
![alt text](<Screenshot from 2026-02-25 17-39-27.png>)


##Exercise 4 — Tasks
-List all directors of Pixar movies (alphabetically), without duplicates ✓
```
SELECT 
DISTINCT
director from
movies order by director;
```
-List the last four Pixar movies released (ordered from most recent to least)
-List the first five Pixar movies sorted alphabetically
-List the next five Pixar movies sorted alphabetically
    
##Exercise 8 — Tasks
-Find the name and role of all employees who have not been assigned to a building ✓
```
SELECT 
name,role FROM employees
WHERE building IS NULL;
```
-Find the names of the buildings that hold no employees
```
SELECT 
DISTINCT building_name
FROM buildings 
LEFT JOIN employees
ON building_name = building
WHERE role IS NULL;
```

![alt text](<Screenshot from 2026-02-27 10-34-54.png>)

##Exercise 9 — Tasks
-List all movies and their combined sales in millions of dollars
```
SELECT 
title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
FROM movies
JOIN boxoffice
ON movies.id = boxoffice.movie_id;
```
-List all movies and their ratings in percent
```
SELECT title, rating * 10 AS rating_percent
FROM movies
JOIN boxoffice
ON movies.id = boxoffice.movie_id;
```
-List all movies that were released on even number years
```
SELECT title, year
FROM movies
WHERE year % 2 = 0;
```

![alt text](<Screenshot from 2026-02-27 12-47-28.png>)


##Exercise 10 — Tasks
-Find the longest time that an employee has been at the studio
```
SELECT 
MAX(years_employed) as Max_years_employed
FROM employees;
```
-For each role, find the average number of years employed by employees in that role
```
SELECT 
role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;
```
-Find the total number of employee years worked in each building
```
SELECT building, 
SUM(years_employed) as Total_years_employed
FROM employees
GROUP BY building;

```
![alt text](<Screenshot from 2026-02-27 14-47-36.png>)


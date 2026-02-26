##Exercise 6 — Tasks
-Find the domestic and international sales for each movie ✓
```
SELECT  * 
FROM movies as m
inner join boxoffice as b
on m.Id = b.Movie_Id;
```
-Show the sales numbers for each movie that did better internationally rather than domestically
```
SELECT  * 
FROM movies as m
inner join boxoffice as b
on m.Id = b.Movie_Id
where domestic_sales<international_sales     
```
-List all the movies by their ratings in descending order
```
SELECT  * 
FROM movies as m
inner join boxoffice as b
on m.Id = b.Movie_Id
order by rating desc
```

![alt text](<Screenshot from 2026-02-26 16-34-15.png>)



##Exercise 7 — Tasks
-Find the list of all buildings that have employees ✓
```
SELECT distinct building FROM 
employees as e
inner join buildings as b
where 
e.building = b.building_name;
```
-Find the list of all buildings and their capacity
```
SELECT *
FROM  buildings;
```
-List all buildings and the distinct employee roles in each building (including empty buildings)
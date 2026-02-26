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
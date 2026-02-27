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
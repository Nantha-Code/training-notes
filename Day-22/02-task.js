fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
.then((response) => response.json())
.then((data) => data.filter(country => country.population > 10000000))
.then((data) => data.toSorted ((a,b)=> b.population-a.population))
.then((result) => result.map((country) => country.name.common))
.then((result) => console.log(result));
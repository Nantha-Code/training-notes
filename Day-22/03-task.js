

// Print countries with a population of more than 10,000,000.

// **Output Format:**

// ```text
// 01. India - 150000000
// 02. China - 120000000
// 03. Russia - 80000000
// ..
// 10. Austraila - 300000

// fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
// .then((response) => response.json())
// .then((data) => data.filter(country => country.population > 1_00_00_000))
// .then((data) => data.toSorted ((a,b)=> b.population-a.population))
// .then((result) => result.map((country) => country.name.common))
// .then((result) => console.log(result));



fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
  .then(res => res.json())
  .then(data => data
    .filter(country => country.population > 10_000_000)             
    .toSorted((a, b) => b.population - a.population)               
    .slice(0, 10)                                                  
    .map((country, i) => `${String(i + 1).padStart(2, '0')}. ${country.name.common} - ${country.population.toLocaleString()}`) 
  )
  .then(result => console.log(result))
  .catch(err => console.error("Fetch error:", err));

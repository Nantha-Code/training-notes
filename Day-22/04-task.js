






fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
  .then(res => res.json())
  .then(data => data
    .filter(country => country.population > 10_000_000)             
    .toSorted((a, b) => a.population - b.population)               
    .slice(0, 10)                                                  
    .map((country, i) => `${String(i + 1).padStart(2, '0')}. ${country.name.common} - ${country.population}`) 
  )
  .then(result => console.log(result))
  .catch(err => console.error("Fetch error:", err));
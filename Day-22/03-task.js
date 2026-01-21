fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
.then((response) => response.json())
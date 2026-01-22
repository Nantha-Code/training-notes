// # URL

// https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital


// # Task 1.1

// - Get all countries common name
// - Output
// `['China', 'India', .... 250 countries]`

fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
 .then((response) => response.json()) 
//  .then((data) => console.log(data));
//  .then((data) => console.log(common));
 .then((data) => data.map((country) =>country.name.common))
 .then(result => console.log(result));






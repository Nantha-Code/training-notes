// fetch(
//   "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
// ) // Promise
//   .then((response) => response.json()) // JSON -> Object or Array
//   .then((data) => console.log(data));

// fetch(
//   "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
// ).then((res) => console.log(res)); // Response Object

//   .then((data) => console.log(data));

function task1() {
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  )
    .then((res) => res.json())
    .then((countries) => countries.map((country) => country?.name?.common))
    .then((result) => console.log(result));
}

// task1();

function task2() {
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  )
    .then((res) => res.json())
    .then((countries) =>
      countries
        .filter((country) => country.population >= 1_00_00_000)
        .toSorted(
          (countryA, countryB) => countryB.population - countryA.population,
        )
        .map((country) => country?.name?.common),
    )
    .then((result) => console.log(result));
}

task2();

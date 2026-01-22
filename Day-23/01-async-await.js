function task1() {
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  ) // Promise
    .then((res) => res.json()) // Promise<Promise>
    .then((countries) => countries.map((country) => country?.name?.common)) // Promise<Array>
    .then((result) => console.log(result)); // Promise<undefined>
}

task1();

// Async / Await -  Looks like "Sync" code
async function task1New() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  );

  const countries = await res.json();
  const result = countries.map((country) => country?.name?.common);
  console.log(result);
}
task1New();

// Convert below to async / await
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


// try & catch

async function run2() {
  try {
    console.log(1);
    let x = await Promise.resolve(2);
    console.log(x);
  } catch (err) {
    console.log("Oops: " + err);
  }
}

// // run2();

// async function run3() {
//   try {
//     console.log(1);

//     let age = 14;

//     if (age < 18) {
//       await Promise.reject("Try again after some years 👶");
//     }

//     let result = await Promise.resolve("All good");
//     console.log(result);
//   } catch (err) {
//     console.log("Oops: " + err);
//   }
// }

// run3();

// run2();

async function run4() {
  try {
    console.log(1);

    let age = 20;

    if (age < 18) {
      await Promise.reject("Try again after some years 👶");
    }

    let result = await Promise.resolve("All good");
    console.log(result);
  } catch (err) {
    console.log("Oops: " + err);
  }
}

run4();

async function task1New() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  );

  const countries = await res.json();
  const result = countries.map((country) => country?.name?.common);
  console.log(result);
}
task1New();

// async function task2New() {
//   const countries = await fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
//   ).then((res) => res.json());

//   const result = countries.map((country) => country?.name?.common);
//   console.log(result);
// }
// task1New();

async function task3New() {
  const countries = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  ).then((res) => res.json());

  const result = countries.map((country) => country?.name?.common);
  console.log(result);
}
task1New();

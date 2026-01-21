// ### **Task 1.5 📋**

// Display the Top 10 most populated countries on the screen as a list.

// **Item Format:**

// ```html
// <ol>
//     <li>India - 150000000</li>
//     ...
    
// </ol>


// fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
//   .then(res => res.json())
//   .then(data => data
//     .filter(country => country.population > 10_000_000)             
//     .toSorted((a, b) => b.population - a.population)               
//     .slice(0, 10)                                                  
//     .map((country, i) => `${String(i + 1).padStart(2, '0')}. ${country.name.common} - ${country.population}`) 
//   )
//   .then(result => console.log(result))
//   .catch(err => console.error("Fetch error:", err));


//   const grid = document.querySelector(".grid");

// // fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
//   .then(response => response.json())
//   .then(countries => {
//     countries.forEach(country => {
//       const card = document.createElement("div");
//       card.className = "flex-box";

//       card.innerHTML = `
//         <div class="main-box">
//           <div class="image">
//             <img src="${country.flags.png}" alt="${country.name.common}-flag">
//           </div>

//           <div class="text">
//             <h2>${country.name.common}</h2>
//             <h3>Population: <span>${country.population}</span></h3>
//             <h3>Region: <span>${country.region}</span></h3>
//             <h3>Capital: <span>${country.capital?.[0] || "N/A"}</span></h3>
//           </div>
//         </div>
//       `;

//       grid.appendChild(card);
//     });
//   })
//   .catch(error => {
//     console.error("Error fetching countries:", error);
//   });


const list = document.querySelector(".country-list");

fetch("https://restcountries.com/v3.1/all?fields=name,population")
  .then(res => res.json())
  .then(data => data
    .filter(country => country.population > 10_000_000)  // filter the country population greater 10lach
    .toSorted((a, b) => b.population - a.population)      // sort the countries descending
    .slice(0, 10)                                        // slice the top 10 countries
  )
  .then(topCountries => {
    topCountries.forEach((country, i) => {
      const li = document.createElement("li");           // create a new list
      li.textContent = `${country.name.common} - ${country.population.toLocaleString()}`;
      
      list.appendChild(li);                               // add the list to the unordered list
    });
  })
  .catch(err => console.error("Fetch error:", err));



// {

// const grid = document.querySelector(".grid");

// countries.forEach(country => {
//   const card = document.createElement("div");
//   card.className = "flex-box";

//   card.innerHTML = `
//     <div class="main-box">
//       <div class="image">
//         <img src="${country.flag}" alt="${country.name}-flag">
//       </div>

//       <div class="text">
//         <h2>${country.name}</h2>
//         <h3>Population: <span>${country.population}</span></h3>
//         <h3>Region: <span>${country.region}</span></h3>
//         <h3>Capital: <span>${country.capital}</span></h3>
//       </div>
//     </div>
//   `;

//   grid.appendChild(card);
// });

// }


const grid = document.querySelector(".grid");

fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      const card = document.createElement("div");
      card.className = "flex-box";

      card.innerHTML = `
        <div class="main-box">
          <div class="image">
            <img src="${country.flags.png}" alt="${country.name.common}-flag">
          </div>

          <div class="text">
            <h2>${country.name.common}</h2>
            <h3>Population: <span>${country.population}</span></h3>
            <h3>Region: <span>${country.region}</span></h3>
            <h3>Capital: <span>${country.capital?.[0] || "N/A"}</span></h3>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching countries:", error);
  });



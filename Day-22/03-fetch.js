console.log("Started");
// REST Endpoint or REST API
// REST - CRUD - JSON
// SOAP - XML

// function fetch (){
//    return new Promise((resolve, reject)=> {

//     const dbTime = 1500;

//     setTimeout(() => {
//       resolve(response);
//     }, dbTime);

//    })
// }

fetch("https://restcountries.com/v3.1/all?fields=name,flags") // Promise
  .then((response) => response.json()) // JSON -> Object or Array
  .then((data) => console.log(data));

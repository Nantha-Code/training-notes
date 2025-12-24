const fruits =["🍇","🍌","🍑","🫐","🥑"]
for(let i=0; i<5; i++){
    console.log(i,fruits[i]);
}  
const ngers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];
 
for (let i=0; i <=5; i++){
    console.log(`${avengers[i]} contains ${avengers[i].length}`);
}

const avengers1 = [
    "Hulk",
      "Iron man",
        "Black widow",
          "Captain america",
            "Spider man",
              "Thor",
              ];
for(let avenger of avengers){
console.log(`${avenger} ${avenger.lengthb }`)
}

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

//   for (let book of books){
//    console.log(`${}
//   }
// }


// funtion sayHello
function sayHello(){
    return function(){
        console.log("Hello! 🥰");
    }
    // console.log say Hello();
}
  //console.log(sayHello()());
  const a =sayHello();
  a()




































































































































var quote = " Do Good , Be Good "
console.log(quote.trim().toLocaleLowerCase());

// var stock1 = "vanilla";
// var stock2 = "chocolate";
// var stock3 = "butterscotch";
// var stock4 = "cotton candy";


// var iceCream = prompt("tell me your fav flavor");


// if (stock1 == iceCream) {
//     console.log("enjoy vannila flavor")
// } else if (stock2 == iceCream){
//     console.log("enjoy chocolate flavor")
// }
//  else if (stock3 == iceCream){
//     console.log("enjoy butterscotch flavor")
//  }
//  else if (stock4 == iceCream){
//     console.log("enjoy cotton candy flavor")
//  }
//  else {
//     console.log("we don't have stock")
//  }



     var stock1 = "vanilla";                                            
     var stock2 = "chocolate";
     var stock3 = "butterscotch";
     var stock4 = "cotton candy";    

 var iceCream = prompt("tell me your fav flavor");
 
 if ( iceCream === stock1 || iceCream === stock2 || iceCream === stock3 ||  iceCream ===stock4) {
    console.log(`enjoy the ${iceCream}`)
 }
 else{
    console.log(`we ran out of stock `)
 }


 var petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  legs: 4,
  isFriendly: true,
  favoriteToy: "ball",
  "graduated at": "Dog academy",
  "movie-title": "Harry potter",
};

console.log(petProfile.name);

petProfile.age = (petProfile.age + 1);
console.log(petProfile.age)

// spread operator
const y1 = [200,300]
const y2 = [400,500]
const y3 = [...y1, ...y2]

console.log(y3)

const book = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
};

const details = {
  year: 2002,
  price: 1200,
};

// Your Code
 const fullDetails = {...book, ...details};
console.log(fullDetails)


const details1 = {
  authorAge: 55,
  year: 2002,
  price: 1200,
};

const book1 = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  authorAge: 45,
};

// Your Code (Merge both book & details)  authorAge: 55

const fullDetails1 ={...book1,...details1}

console.log(fullDetails1)

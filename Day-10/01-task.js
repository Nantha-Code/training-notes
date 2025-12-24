// case 1:
// There no books which are >= 4.7
// The are no good books available 😔

// Case 2:
// There is only one
// Highest rated books is Sapiens

// Case 3:
// There are two more
// Highest rated books are: Sapiens, A Brief History of Time and Clean Code
// const book(rating >=4.7) ={Highest rated books are: Sapiens, A Brief History of Time and Clean Code}
// const book(rating >=4.9) ={Highest rated books is Sapiensw}

// function getFictionbooks(book,rating){
//     for (let book of books)
//   if(book.rating >= 4.7){
//     console.log("Highest rated books are: Sapiens, A Brief History of Time and Clean Code")
//   }else if(book.rating >=4.8){
//     console.log("Highest rated books is Sapiens")
//   }else{
//     console.log("The are no good books available 😔")}

// }
//   console.log(getFictionbooks(book,6))


//   const add = (a) => (b) => a+b;
//   console.log(4,5);


// function add (a,b){
// return (a+b)
// }
// console.log(4,5);

// function (a)=>{

//     function(b) =>{


//     }
// }

// const csk1 = {
//   captain: "MSD",
//   color: "yellow",
//   stats: {
//     win: 5,
//     loss: 11,
//   },
// };
// function getWinStat(csk1) {
// if (csk1 == csk1.stats && csk1 == csk1.stats.win ){
//      return (csk1.stats.win)
// }else{
//     return"Data not found"
// }
// }
   
    
// cons
// 
// ole.log(getWinStat(csk1)); // 5
// console.log(getWinStat(csk2)); // 'Data not found'
// console.log(getWinStat(csk3)); // 'Data not found'
// console.log(getWinStat(csk4)); // 'Data not found'

const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

function getWinStat(goat){
    if(!goat.stats.win)
        return"data not found";
    {
       return goat.stats.win;
    }
};

const avengers1 = [
    "Hulk",
      "Iron man",
        "Black widow",
          "Captain america",
            "Spider man",
              "Thor",
              ];

            //   for (let avengers1 of avengers1){
            //     return`${avengers1.length}`
            //   }

            const ans = avengers1.map((n)=>n.length)
            console.log(ans)
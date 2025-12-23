// Create a function `moodReport` with two parameters that have default values.  
// Return a sentence using those values.
// console.log(moodReport());


// function moodReport() {
    
// }
// console.log(moodReport("😎", "afternoon ☀️"));


// function student(name){
//     return `hello ${name}`;
// }
// console.log(student("nk"));

function moodReport(emoji="😊" ,day="morning")  {
    return`feeling ${emoji} this ${day}`;
}

console.log(moodReport("😎", "afternoon ☀️"));
console.log(moodReport());

// Create a function `checkAgeCategory(age = 18)`

function checkAgeCategory(age = 18) {
    if (age<18)
     {
        return`minor`
    } else if(age>=60){
        return`Senior`
    }else{
        return`Adult`
    }
}
console.log(checkAgeCategory(2));
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));

// Create a function `introduceWizard(wizardObj)
const wizard = { name: "Merlin", 
                 title: "Archmage",
                 wand: { core: "Phoenix Feather" } };

function introduceWizard(wizardObj) {
    const {name,title,wand:{core}} = wizard;
    //const {core} = wand;
    return`${title} ${name}wields a wand with ${core}core`;   
}
// Archmage Merlin wields a wand with Phoenix Feather core.
console.log(introduceWizard(wizard));

// Create a function `mergeInventory(existing, incoming)`

const shelf = ["🍎", "🥪"];
const delivery = ["🍫", "🍇"];

function mergeInventory(existing, incoming){
    return` [${shelf}${delivery}${total}]`
}
console.log(mergeInventory(shelf, delivery));


function mergeInventory(existing, incoming){
    const total =["🚗","☔"]
    return` ${shelf},${delivery},${total}`
}
console.log(mergeInventory(shelf, delivery));

// Create a function `packBag(owner = "Anon", ...items)

function packBag(owner="Anon", ...items) {
   
// return`🎒 ${owner}'s bag contains: ${items} `
// 
 if(items == '') {
    return`${owner}'s bag is empty `
 } else {
    return`${owner}'s bag contains:${items}`
 }
 }
console.log(packBag("Natasha", "💄", "🔫"));
console.log(packBag());

// Create a function `whereAreYou(personObj)

// function whereAreYou(personObj){
//     const person = {location};
//     const city = {location};
  
//     const planet= {location};
//     return`${user}is currently${city} ${planet}`
// }

console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
console.log(whereAreYou({}));
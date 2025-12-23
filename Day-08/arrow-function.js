//  Convert below to arrow function

//  Task 2.1
const introduceWizard = ({ title = "Master", name, wand: { core } }) =>`🪄 ${title} ${name} wields a wand with ${core}.`;
const wizard = { name: "Merlin", 
                 title: "Archmage",
                 wand: { core: "Phoenix Feather" } };
console.log(introduceWizard(wizard));              

//  Task 2.2
const mergeInventory = (shelf = [], delivery = []) => [...shelf, ...delivery]
const shelf = undefined;
const delivery = ["🍫", "🍇"];
console.log(mergeInventory(shelf,delivery));

//for loop
for (let i = 0; i < 5; i++)
    {  
        console.log("❤️");
     }
//  ❤️
//  ❤️❤️
//  ❤️❤️❤️
//  ❤️❤️❤️❤️
//  ❤️❤️❤️❤️❤️
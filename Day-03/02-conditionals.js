var isRaining = false;

if (isRaining=true) {
    console.log("wear☔")
} else {
    console.log("wear 🏊‍♂️")
}

// var noOfOPersons  = 5;

// if (noOfOPersons  <= 2) {
//     console.log("go🚲");
// } else {
//     console.log("go🚗");
// }

var noOfPersons = 6 ;

if (noOfPersons ===2) {
    console.log("go to bike");
}
 else if(noOfPersons ===5){
   console.log("go to bus");
}
else{
console.log("go to auto");
}


var noOfPersons = 6;

if (noOfPersons <= 2) {
    console.log("go to bike");
}
else if (noOfPersons === 5) {
    console.log("go to auto");
}
else {
    console.log("go to bus");
}

var noOfPersons = 5;

if (noOfPersons <= 2) {
    console.log("go to bike");
}
else if (noOfPersons ==3) {
    console.log("go to auto");
}
else if (noOfPersons == 4 || noOfPersons ==5) {
    console.log("go to car");
}
else {
    console.log("go to bus");
}

// Task 2.1
// Convert °C -> °F
// Enter temperature in °C - User
// 30°C
// Formula: (0°C × 9/5) + 32
// Output
// The temperature in 30°C is 86°F

// Task 2.2 (same as above with Template literal)


var temperature = prompt("Enter the temperature in Fahrenheit");
temperature = Number(temperature);

var celsius = (temperature - 32) * 5 / 9;

console.log("the Temperature in Celsius: " + celsius);


var temperature = prompt("Enter the temperature in Celsius");
temperature = Number(temperature);

var fahrenheit = (temperature * 9 / 5) + 32;

console.log("Temperature in Fahrenheit: " + fahrenheit);



var day = Number(prompt("Enter a number (1–7):"));

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Wrong Option");
}


var name1 = prompt("Enter first person name:");
var height1 = Number(prompt("Enter height of " + name1 + " in cm:"));

var name2 = prompt("Enter second person name:");
var height2 = Number(prompt("Enter height of " + name2 + " in cm:"));

if (height1 > height2) {
  console.log(name1 + " is taller than " + name2 + " by " + (height1 - height2) + "cm");
} else if (height2 > height1) {
  console.log(name2 + " is taller than " + name1 + " by " + (height2 - height1) + "cm");
} else {
  console.log(name1 + " and " + name2 + " are the same height");
}

var fullName = "nk"
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());


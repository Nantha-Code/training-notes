const student = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
};

const { name, address, hobbies } = student;
const { city } = address;
const [, h2] = hobbies;

console.log(name);
console.log(address);
console.log(city);
console.log(hobbies);
console.log(h2);

console.log(student) 



const student1 = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Trichy",
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
  skills: ["Dance", "Violin"],
};

const student2 = {
  name: "Abishek",
  age: 20,
  address: {
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"], 
  skills: ["Dance", "Violin"],
};

// Default value taken when the value is undefined
// Task - provide default value for city as 'N/A'
// const { name = "Surya", skills = ["HTML", "CSS", "Singer"] } = student;

// console.log( skills);
// console.log(city); // 'N/A'

// Method 2
console.log(student1.address.city)

console.log(student2.city) 
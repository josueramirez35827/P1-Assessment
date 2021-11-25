// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];

function parking(arr) {
  let result = arr.filter(car => (car.type === "sedan"));
  return result;
}

console.log(parking(carBrands));


/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(string) {
  let newString = "";
  for (i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(reverseString("cat"));

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

let arrOfStrings = ["I'm", "Really", "Wanting", "To", "Get", "Better", "At", "Coding"];
function longestString(arr) {
  let longestWord = "";
  for (i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(longestString(arrOfStrings));


// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005

let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
  let totalPrice = arr.reduce((acc, curr) => acc + curr.price, 0);
  return totalPrice;
}
console.log(shop(wishlist));




// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.


// Recursion, in simple terms, is when a function is used to call on its own self. This process will continue forever so it is important to make sure to add a stopping condition.

// For Example,
//   function run() {
//     console.log("thanksgiving");
//     run();
//   }
// run();

// In this example, we are calling on function run() to console.log the string thanksgiving using its own self. This is how recursion can be useful since we don't have to use another method to do the same amount of work. But this is also wrong becasue we don't have an stopping condition.This function will continue to call on itself and print out thanksgiving forever or atleast until your browser crashes. To remedy this, we can add an if statment and set it for a predetermined amount of times until it has to stop.

// For Example,
//   function run(x) {
//     if (x === 3) return;
//     run(x + 1);
//   }
// console.log("thanksgiving");
// run(0)

// In this example, we are calling on the function to run the parmeter again and again to console.log thanksgiving. However, with the if statment added in, we have setting a predetermined amount of times for it to call on the itself until it stops running. In this case it is 3. That way the function can run and check itself until it has reached its stopping condition. 


//6. OOP has 4 pillars and we learned about each in this phase. 
//Choose the pillar you are most comfortable with 
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as 
//instructors and you will be banished to the nether realms.

// lol, please don't banish me if I get this one wrong!

// One out of the four pillars in OOP is Inheritance. This is when the child is able to take all the method and properties given to the parent without have to directly give it to the child. This can be a useful feature when it comes to code reusability.

// For Example,
// class Person { 
//   constructor(name) {
//       this.name = name;
//   }

//   greet() {
//       console.log(`Hello ${this.name}`);
//   }
// }

// class Student extends Person {

// }

// let student1 = new Student('Jack');
// student1.greet();

// In this example, we can see that the parent class called Person is being given a greet() function where it will print out the string Hello + whatever is given as name. By using the extend keyword, the child class labeled as Student can inherit the greet() function we gave to Person. We than can also add a new variable (student1) which will give us a string as the name. Once we have all of the information we can have an output as Hello Jack. 



/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */

let booleanArray = [false, true, false, true]
const flipBool = (arr) => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = !arr[i];
  }
  return arr;
}

console.log(flipBool(booleanArray));





// 8.
//FEAST OR FAMINE
//  - Write a function that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`



function firstAndlast(animal, food) {
  let animalFL = "";
  let firstChar = animal.charAt(0)
  let lastChar = animal.charAt(length - 1)
  let aniLetter = firstChar + lastChar;
  animalFL.push(aniLetter);

  let foodFL = "";
  let firstChar1 = food.charAt(0)
  let lastChar1 = food.charAt(length - 1)
  let aniLetters = firstChar1 + lastChar1;
  foodFL.push(aniLetters);

  if (animalFL === foodFL) {
    return animalFL + foodFL;
  } else {
    return false;
  }
}

console.log(firstAndlast(porcupine, spagetti));









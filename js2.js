// Arrays allow us to store lists of data in a collection.
//
// Start by having a read through this for a refresher => https://www.w3schools.com/js/js_arrays.asp

// Task 1: Create a variable called `newYearsResolutions` and set it's value to be a new array with at
// least 3 strings inside of it.
let newYearsResolutions = [
  "Learn Java-script",
  "Eat healthy",
  "Work-out regularly",
];
// Task 2: Create a new variable called `nextNewYearsResolution` and set it's value to the first
// item from the newYearsResolutions array (see the docs above for a hint on how to select items
// from arrays).
let nextNewYearsResolution = newYearsResolutions[0];
console.log(nextNewYearsResolution);
// Task 3: Use console.log() to print the 3rd item in the newYearsResolutions array without setting
// any variables.
console.log(newYearsResolutions[2]);

// Here's an array which the next few tasks will build upon. Don't change it here!
const months = [
  "Jon",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "May",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

// You can modify arrays in a similar way to how you fetched a single value, and then using
// assignment to give it a new value. For example, there's a typo in the first month of the
// months array. It says "Jon" but it should say "Jan". To fix this, we can find the 1st
// item (counting from 0) and assign it a new value:
months[0] = "Jan";

// Task 1: Use console.log() to print the months array. Notice how the first month is fixed!
console.log(months[0]);
// Task 2: The array of months above has another mistake; "Jun" comes before "May". Without
// modifying the line above, use assignment to fix the mistake by re-assigning the 5th
// and 6th items in the array. After you've done that, use console.log() to log the
// months array.
[months[4], months[5]] = [months[5], months[4]];
console.log(months);
// Task 3: Arrays have a property which you can use to find the number of items it contains.
// Try to find it in the docs and then use it in a console.log() below to print the number
// of items in the months array. (Docs: https://www.w3schools.com/js/js_arrays.asp)
console.log(months.length);
// Task 4: There's another problem with the array! It's missing December.. No christmas!!! Fix it
// by using months.push() to add a new item to the end of the array and then use console.log()
// to print the array to the console. Check the docs for more information on .push().
months.push("December");
console.log(months);
// Task 5: There's another function which can be called to remove an item from the array
// (it was in the lecture on JavaScript, or try to find it in the docs). Use it to remove
// the last item from the array and then print the months array using console.log()
months.pop();
console.log(months);
// Task 6: Using splice(), you can remove items from the middle of arrays. It requires two
// arguments; first, the index from where you'd like to start deleting, and second, the
// number of items you'd like to delete. Use .splice() to remove "Jul" from the months array.
months.splice(6, 1);
console.log(months);

// You can iterate over items in an array using forEach. To use forEach,
// you define a function which will be invoked once for every element in
// the array. When the function is invoked, it will receive the item from
// the array as an argument.
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// This array of dog breeds will be used for the examples below. Don't modify it here!
const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

// When invoked, this function will print "The {dogName} barks." You'll use this below. Don't modify it here!
const printDogName = (dogName) => {
  console.log("The " + dogName + " barks.");
};

// Task 1: Pass the printDogName function into a .forEach call on the `dogs` array, to
// make it print "The {dogName} barks." for each item in the array.
dogs.forEach(printDogName);

// Task 2: Create a new function called `printDogNameUppercase` which works similarly
// to the `printDogName` function but makes the string uppercase. (See https://www.w3schools.com/jsref/jsref_touppercase.asp
// for how to make a string uppercase). Use .forEach to run the function for each
// dog in the dogs array.
const printDogNameUppercase = (dogName) => {
  console.log("The " + dogName.toUpperCase() + " barks.");
};
dogs.forEach(printDogNameUppercase);
// Task 3: Write a forEach function which uses an anonymous function instead of defining a
// named function like the examples above (hint; the lecture material used anonymous functions)
// and uses console.log to print "The {dogName} needs to go for a walk!".
dogs.forEach((dogName) => {
  console.log("The " + dogName + " needs to go for a walk!");
});

// String methods lets us manipulate strings in javascript

// .length

let string = "Dette er en string"
let length = string.length

// .length returns the length of a string
console.log(length)

// .slice()

let carBrands = "BMW, Audi, Nissan, Mazda"
let testCutOne = carBrands.slice(10, 17)

console.log(testCutOne)

// .slice() "slices" out a portiojn of a string from postion a to position b

// If we only use the first param, the method will slice the rest of the string
let testCutTwo = carBrands.slice(10)
console.log(testCutTwo)

// If we use negative values, it starts counting from the back
let testCutThree = carBrands.slice(-19)
console.log(testCutThree)

// .replace()

let drinks = "Soda, Juice, Water, Milk, Water"
let replaceDrinks = drinks.replace("Water", "Whiskey")

console.log(replaceDrinks)

/* 
The replace method replaces a value we specify with another one.
It does not replace the string, it instead returns a new string with the changes.
It will ONLY replace the first match.
It is also a case sensitive method.
 */

// .replaceAll

let dogs =
   "I love dogs, dogs are pretty awesome pets. My dogs are douchebags though."

let cats = dogs.replaceAll("dogs", "cats")

console.log(dogs)
console.log(cats)

// toUpperCase() and toLowerCase()
let capitalDogs = dogs.toUpperCase()

console.log(capitalDogs)

// concat
let hello = "Hello"
let world = "World"

let helloWorld = hello.concat(" ", world)

console.log(helloWorld)

// trim

let spacedText = "          Hello        "
let removeSpace = spacedText.trim()

console.log(spacedText)
console.log(removeSpace)

// .split splits a string at our chosen points, and creates a new array out of the string.
let cities = "Bergen, Beijing, Bankok, Brasilia, Prague, Porto, Phuket, Paris"
let citiesArray = cities.split(", ")

console.log(citiesArray)

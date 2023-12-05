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

// ARRAY METHODS //

// length
let fruitArr = ["Banana", "Mango", "Pear", "Apple", "Orange"]
let fruitLength = fruitArr.length

console.log(fruitLength)

//toString()
let fruitString = fruitArr.toString()
console.log(fruitString)

// join()

let joinFruit = fruitArr.join(" ")
console.log(joinFruit)

// Popping and pushing

// pop() method removes the last element from an array

let fruitPop = fruitArr.pop()

console.log(fruitArr)

// The pop method returns the aclue that was "popped out"
console.log(fruitPop)

// push() method adds a new element to and array (at the end)
let fruitPush = fruitArr.push("Dragonfruit")

console.log(fruitArr)

// push() method returns the new array length
console.log(fruitPush)

// shift and unShift ()shifting elements

// The shift() method removes the first array element and shifts all other elements to a lower index

let fruitShift = fruitArr.shift()

console.log(fruitArr)
console.log(fruitShift)

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
let fruitUnShift = fruitArr.unshift("Lemon")
console.log(fruitArr)

// Changing items

// Array elements are accessed by their index number

fruitArr[2] = "Kiwi"

console.log(fruitArr)

fruitArr[fruitArr.length] = "Potato"

console.log(fruitArr)

/* 
Ikke gjør dette!!!

delete fruitArr[5]

console.log(fruitArr)
 */

const arr1 = ["Berit", "Emil", "Ole Gunnar"]
const arr2 = ["Tobias", "Tord", "Ingmar"]
const arr3 = ["Camilla", "Emilie", "Emilio"]

const favPeople = arr1.concat(arr2, arr3)

console.log(favPeople)

// Splicing and slicing

//the splice method adds new items to an array
//The slice method slices out a piece of an array

let spliced = arr1.splice(1, 2, "Bettina", "Tormund")

console.log(arr1)
console.log(spliced)

const names = arr2.slice(1)

console.log(names)

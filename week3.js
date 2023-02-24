//question one

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
    //creating my array
let lastPosition = ages.length - 1;
let lastElement = ages[lastPosition];
// finding the last element in my array
let firstElement = ages[0];
//finding the first element in my array
function subtraction(lastElement, firstElement){
    console.log(lastElement - firstElement);
}
console.log(lastElement - firstElement);
// subtracting the last element from the first element
ages.push(87);
//pushing a new element
function total(ages){
let sum = 0
for(var i = 0; i<ages.length;i++){
    sum += ages[i]
} console.log(sum(ages));
}
//calculating average age


//question two

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
let length = names.map(function(element){
    return element.length;
})
console.log(length);
//average number of letters per name

let listOfNames = "";
let i = 0;
for (int = 0; i < names.length; i++){
    listOfNames += names[i] + " ";
}
console.log(listOfNames);
//concatenating and listing all names

//question three
// finding the length of the array and subtracting one. array.length - 1

//question four
// finding the element in the zeroth position. array[0]

//question five
let nameLengths = [];
nameLengths.push(length);
console.log(nameLengths);


//question six
let totalNameLength = 0;
for (let totalNameLength of length){
    totalNameLength += length;
}
console.log(totalNameLength);


//question seven
const thisFunction = (word, n) => {
    let result = " ";
    for (let i = 0; i < n; i++){
        result += word;
    }
    return result;
}
console.log(thisFunction("Hello", 3));
//printing whatever word however many times you'd like to the console

//question eight
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("Anna", "Hayes"));
//using an arrow function to print whatever is assigned to firstname and lastname

//question nine
let exampleArray = [35, 12, 40, 10, 9];
let exampleSum = 0;
for (let i = 0; i < exampleArray.length; i++){
    exampleSum = exampleArray[i];
}
let overOneHundred = exampleSum > 100;
console.log(overOneHundred); 
//adding the total sum of the numbers in the array and using a boolean to determine if it is over 100



//question ten
const average = exampleArray => exampleArray.reduce((a, b) => a + b) / exampleArray.length;
console.log(average(exampleArray));
//finding the average in exampleArray created for question nine

// question eleven
let arrayOne = [10,20,30,40];
let arrayTwo = [5,10,15,20];
//setting up my arrays 
let averageArrayOne = 0;
for(let i = 0; i < arrayOne.length; i++){
    averageArrayOne += arrayOne[i];
}
let averageOfArrayOne = averageArrayOne / arrayOne.length;
//finding the average of array one

let averageArrayTwo = 0;
for (let i = 0; i < arrayTwo.length; i++){
    averageArrayTwo += arrayTwo[i];
}
let averageOfArrayTwo = averageArrayTwo / arrayTwo.length;
//finding the average of array two

if (averageOfArrayOne > averageArrayTwo){
    console.log(true)
} else {
    console.log(false)
}
//checking and consoling if average of arrayone is greater than arraytwo

//question twelve
function willBuyDrink (isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.5){
        console.log(true);
    } else {
        console.log(false);
    }
}
// this function checks if ishotoutside is true and if moneyinpocket is greater than 10.5

//question thirteen
function autoLightsTurnOff (brightOutside, time){
    if (brightOutside == true && time > 1600 && time < 0800){
        console.log("Lights are off");
    } else{
        console.log("Lights are on");
    }
}
/* this function determines whether it is bright outside and between a certain
time, if they both result in true, the lights will be off, else they will
be on*/
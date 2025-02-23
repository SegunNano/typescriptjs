"use strict";
// type
// string
// number
// boolean
// annotations
// let variable: type = value
const userName = 'Segun';
const age = 1000000;
const isAdmin = true;
console.log(age);
// type inferrence
let lastName = 'Fadipe';
// any type
let material = 'anything';
material = 2;
// function parameter and return annotations
function addOne(num) { return num + 1; }
const square = (x) => console.log(x * x);
// array types
const ageArr = [1];
//  multidimensional Array
const ageArrArr = [[1]];
const person1 = {
    firstName: 'Segun',
    lastName: 'Fadipe',
    age: 27,
    isAdult: true,
    // friends: [],
    email: 'oluuseguun@gmail.com',
    deskPasscode: 'sdhfsdjkhfkjhdfkj',
    experience: 'over 4 years'
};
// tuples
const myTuples = ['hello', 1000000, true];
const [myString, myNumber, myBoolean] = myTuples; //tuples destructuring
// enum
var PeoplePlaces;
(function (PeoplePlaces) {
    PeoplePlaces["Segun"] = "Olambe";
    PeoplePlaces["Felix"] = "Ikorodu";
    PeoplePlaces["Micah"] = "Akoka"; //2
})(PeoplePlaces || (PeoplePlaces = {}));
// function placeTextGen(name: string): void {
//     console.log(`Mr ${name} stays at ${PeoplePlaces[name]}.`)
// }
// placeTextGen('Micah')
// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'typeof PeoplePlaces'.
//   No index signature with a parameter of type 'string' was found on type 'typeof PeoplePlaces'.
class Person {
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }
}
// interface
const myComputer = {
    name: 'EliteBook *4670p',
    maker: 'hp',
    ram: 8,
};
// generics
// narrowing  

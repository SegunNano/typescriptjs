// type
// string
// number
// boolean



// annotations

// let variable: type = value

const userName: string = 'Segun';
const age: number = 100_0000;
const isAdmin: boolean = true;

console.log(age)

// type inferrence
let lastName = 'Fadipe';




// any type

let material: any = 'anything';
material = 2;


// function parameter and return annotations

function addOne(num: number): number { return num + 1; }

const square = (x: number) => console.log(x * x);

// array types

const ageArr: number[] = [1];


//  multidimensional Array
const ageArrArr: number[][] = [[1]];



// object

// you define the type first

type PersonalInfo = {
    firstName: string,
    lastName: string,
    age: number,
    isAdult: boolean,
    friends?: string[];
};
type OccupationlInfo = {
    email: string,
    institution?: string;
    deskPasscode: string | number, //union types
    experience: 'less than 1 year' | '1-3 years' | 'over 4 years'; //literal types
};


// inteesection types
type User = PersonalInfo & OccupationlInfo;




const person1: User = {
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

const myTuples: [string, number, true] = ['hello', 1000_000, true];

const [myString, myNumber, myBoolean] = myTuples;  //tuples destructuring


// enum

enum PeoplePlaces {
    Segun = 'Olambe', //0
    Felix = 'Ikorodu',//1
    Micah = 'Akoka'//2
}

function placeTextGen(name: keyof typeof PeoplePlaces): void {
    console.log(`Mr ${name} stays at ${PeoplePlaces[name]}.`);
}

placeTextGen('Micah');



class Person {
    age: number;
    name: string;
    constructor(age: number, name: string) {
        this.name = name;
        this.age = age;
    }
}


interface Computer {
    readonly name: string;
    maker: string;
    ram: number;
    rom?: number
}


// interface
const myComputer: Computer = {
    name: 'EliteBook *4670p',
    maker: 'hp',
    ram: 8,

}

// generics



// narrowing  
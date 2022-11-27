// this type annotation tells typescript that we are only
// going to assign a value of type number to the apples variable
const apples: number = 5;
const person: string = 'jacob';

const nothing: null = null;
let little: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Clases
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: string; y: number } = {
  x: 'feel',
  y: 20,
};

// type annotation for Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations

// 1. Function that returns the 'any' type

const json = '{"x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20}

// 2. when we declare a variable on one line and initialize
// it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

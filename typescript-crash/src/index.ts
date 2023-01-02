// Basic Types
let id: number = 5;
let company: string = 'blackcyphering';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Tosin', true];

// Tuple Array
let employee: [number, string][];

employee = [
  [2, 'james'],
  [3, 'stony'],
];

// Union: To allow a particular variable hold more than
// one type

let p_id: string | number;

p_id = '22';

// enum: Allow us to define a set of named constant either
// numeric or string

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Tosan',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
// OR
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

// void
function log(message: string | number): void {
  console.log(message);
}

// log('yes');

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'Tosin',
};

// type Point = number | string;
// const p1: Point = 1
// user1.id = 3

// Using interface with a function
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    // console.log(12);
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, 'Brad');
const mike = new Person(2, 'micheal');

// console.log(brad.register(), mike);

// Subclasses
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register());

// Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['james', 'bond']);

numArray.push('hii');

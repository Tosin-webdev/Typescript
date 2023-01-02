"use strict";
// Basic Types
let id = 5;
let company = 'blackcyphering';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Tosin', true];
// Tuple Array
let employee;
employee = [
    [2, 'james'],
    [3, 'stony'],
];
// Union: To allow a particular variable hold more than
// one type
let p_id;
p_id = '22';
// enum: Allow us to define a set of named constant either
// numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Tosan',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
// OR
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Tosin',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['james', 'bond']);
numArray.push('hii');

"use strict";
// interface PostId = stringOrNumber
// Literal types
let myName;
// myName = 'John'
let userName;
userName = 'Amy';
// userName = 'Rachel'
// functions
const add = (a, b) => a + b;
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello');
logMessage(add(2, 3));
// logMessage(add('a', 3))
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
// default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((acc, cur) => acc + cur, 0);
};
logMessage(total(1, 2, 3, 4));
logMessage(total(1, 2));
logMessage(total(1, 2, 10));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => typeof value === 'number' ? true : false;
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};

// 1. Numbers are even
const array = [2, 22, 44, 12 ,4];
let isAlwaysEven = (x) => x%2==0;
console.log("1 - ", array.every(isAlwaysEven));

// 2. Strings are in UpperCase
const strings = ["GHOST", "SCEPTER", "Lotus", "ORB"];
let isAlwaysUpperCase = (x) => x == x.toUpperCase();
console.log("2 - ", strings.every(isAlwaysUpperCase));

// 3. Numbers are positive
const integers = [6, 2, 3, 5, 1];
let isPositive = (x) => x > 0;
console.log("3 - ", integers.every(isPositive));

// 4. Divisible by a number
const divisible = [4, 2, 6, 8];
const divisor = 3;
let isDivisible = (x) => x%divisor==0;
console.log("4 - ", divisible.every(isDivisible));

// 5. Greater than threshold
const numbers = [40, 50, 60, 70, 80];
const threshold = 100;
let isGreater = (x) => x > threshold;
console.log("6 - ", numbers.every(isGreater));

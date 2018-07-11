// #2: ES6: Compare Scopes of the var and let Keywords

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// #3: ES6: Declare a Read-Only Variable with the const Keyword

function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

// #4: ES6: Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// #5: ES6: Prevent Object Mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// #6: ES6: Use Arrow Functions to Write Concise Anonymous Functions

/* Previous Anonymouse Function
var magic = function() {
  "use strict";
  return new Date();
};*/
// Anonymouse function written with ES6
const magic = () => new Date();

// #7: ES6: Write Arrow Functions with Parameters

/* Previous syntax
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};*/
// ES6 Syntax
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// #8: ES6: Write Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter(num => Number.isInteger(num).map(num => num*num);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// #9: ES6: Set Default Parameters for Your Functions

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN

// #10: ES6: Use the Rest Operator with Function Parameters

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

// #11: ES6: Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();
console.log(arr2); /// JAN,FEB,MAR,APR,MAY

// #12: ES6: Use Destructuring Assignment to Assign Variables from Objects
    
function getLength(str) {
  "use strict";
  const { length : len } = str;
  return len;
}
console.log(getLength('FreeCodeCamp'));
    
// #13: ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow : { max: maxOfTomorrow }} = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // 84.6
    
// #14: ES6: Use Destructuring Assignment to Assign Variables from Arrays
    
let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [6, 8];
})();
console.log(a); // 6
console.log(b); // 8

// #15: ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// #16: ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict";
  return function half({min, max}) {
  return (max + min) / 2.0;
};
})();
console.log(stats); // should be object
console.log(half(stats)); // 28.015

// #17 Not working: ES6: Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map((a) => {
    return `<li class="text-warning">${a}</li>`
});
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
console.log(makeList(result.failure));

// #18: ES6: Write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => {
  "use strict";
  ( {name, age, gender} );
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

// #19: ES6: Write Concise Declarative Functions with ES6

const bicycle = {
  gear: 2,
  setGear (newGear) {
    "use strict";
    return this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// #26: ES6: Import a Default Export

"use strict";
import subtract from "math_functions";
subtract(7,4);

// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = 9/5 * celsius + 32;
  return fahrenheit;
}

convertToF(30); // returns 86

// Basic Algorithm Scripting: Reverse a String
function reverseString(str) {
  let arr = Array.from(str);
  return arr.reverse().join().replace(/,/g,"");
}

reverseString("hello"); // returns "olleh"

// Factorialize a Number
function factorialize(num) {
  if (num > 0) {
    for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  	return num;
  } else {
    return 1;
  }
}
factorialize(5); // returns 120

/*Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.*/

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

booWho(null);  // returns false
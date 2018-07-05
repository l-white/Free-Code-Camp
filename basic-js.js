// Use the parseInt Function

function convertToInteger(str) {
    var num = parseInt(str);
    if (typeof num === "number") {
        return num;
    } else {
        return NaN;
    }
}

convertToInteger("56");

// Basic JavaScript: Use the parseInt Function to convert to binary

function convertToInteger(str) {
    var binaryNum = parseInt(str, 2);
    return binaryNum;
}

convertToInteger("111001");

// Basic JavaScript: Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a === b ? true : false;
}

checkEqual(1, 2);

// Basic JavaScript: Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);
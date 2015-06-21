//  Problem 1. Odd or Even
//  Write an expression that checks if given integer is odd or even.

function isOdd(num) {
    return (num % 2) ? true : false;
}

for (var i = -5; i < 5; i++) {
    console.log("Is " + i + " odd: " + isOdd(i));
}